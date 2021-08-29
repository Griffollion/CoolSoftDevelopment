import { UserCardTemplate } from "./UserCardTemplate";
import styles from "./UserCard.css";

export function UserCard(data) {
  this.component = UserCardTemplate.content
    .querySelector("div")
    .cloneNode(true);
  this.component.querySelector(".usercard__header-username").innerText =
    data.name;
  this.component.querySelector(
    ".usercard__info-email"
  ).innerText = `nickname: ${data.username}`;
  this.component.querySelector(
    ".usercard__info-phone"
  ).innerText = `mail: ${data.email}`;
  this.component.querySelector(
    ".usercard__info-website"
  ).innerText = `web: ${data.website}`;
  this.render = function () {
    const container = document.querySelector(".container-global");
    container.append(this.component);
  };
}
