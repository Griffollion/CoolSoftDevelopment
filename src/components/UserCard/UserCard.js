import { UserCardTemplate } from "./UserCardTemplate";
import styles from "./UserCard.css";

export function UserCard(data) {
  this.component = UserCardTemplate.content
    .querySelector("div")
    .cloneNode(true);
  this.component.querySelector(".usercard__header-username").innerText =
    data.username;
  this.component.querySelector(".usercard__info-email").innerText = data.email;
  this.component.querySelector(".usercard__info-phone").innerText = data.phone;
  this.component.querySelector(".usercard__info-website").innerText =
    data.website;
  this.render = function () {
    const container = document.querySelector(".container-global");
    container.append(this.component);
  };
}
