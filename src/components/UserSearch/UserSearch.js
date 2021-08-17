import styles from "./UserSearch.css";
import { UsersTemplate } from "./UserSearchTemplate";

export function CreateUsersTemplate() {
  this.component = UsersTemplate.content.querySelector("div").cloneNode(true);
  this.render = function () {
    const body = document.querySelector(".container-global");
    body.append(this.component);
  };
}

function renderUser(el) {
  return `<div class="user-search__form--user-list">
          <div class="user-list__avatar">
            <div class="user-list__initial">
            ${el.name
              .split(" ")
              .map(function (item) {
                return item[0];
              })
              .join("")}
            </div>
          </div>
          <div class="user-list--ticker">
          <div class="user-list__name">
              ${el.name}
          </div>
          </div>
          </div>`;
}

export async function GetDataFromServer(obj) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  data.forEach(function (el) {
    const userListPlace = document.querySelector("#app");
    userListPlace.insertAdjacentHTML("beforeend", renderUser(el));
  });
  catchUser(obj);
}

export function ToCloseModalUsersTemplate() {
  document.querySelector(".popup__users-template").remove();
}

export function catchUser(obj) {
  let usersList = document.querySelector(".card-info__container-users-icons");
  let allUsers = document.querySelectorAll(".user-search__form--user-list");
  allUsers.forEach((el) => {
    el.addEventListener("click", (event) => {
      let target = event.currentTarget;
      userName = target.children[1].innerText;
      const getKey = JSON.parse(localStorage.getItem("tasksArray"));
      getKey.forEach((ele) => {
        if (ele.id === obj.id) {
          if (!ele["users"]) {
            ele["users"] = [userName];
          } else {
            ele["users"].push(userName);
          }
        }
      });
      let user = document.createElement("div");
      user.innerHTML = userName;
      user.className = "classUser";
      usersList.append(user);
      localStorage.setItem("tasksArray", JSON.stringify(getKey));
    });
  });
}
