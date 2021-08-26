import styles from "./UserSearch.css";
import { UsersTemplate, UserTemplate } from "./UserSearchTemplate";

export function UsersSearch(data) {
  this.component = UsersTemplate.content.querySelector("div").cloneNode(true);
  const userListPlace = this.component.querySelector("#app");
  data.forEach((el) => {
    this.itemComponent = UserTemplate.content
      .querySelector("div")
      .cloneNode(true);
    this.itemComponent.querySelector(".user-list__initial").innerHTML = el.name
      .toUpperCase()
      .split(" ")
      .map((item) => item[0])
      .join("");
    this.itemComponent.querySelector(".user-list__name").innerHTML = el.name;
    userListPlace.append(this.itemComponent);
  });
  this.render = function () {
    const body = document.querySelector(".main");
    body.append(this.component);
  };
}