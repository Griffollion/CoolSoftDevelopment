import { createUserCard } from "./components/components";

export async function GetDataFromServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

function findUserInServer(user) {
  return GetDataFromServer().then((data) => {
    return data.find((el) => el.name == user);
  });
}

// export function catchUserInModalWindow(obj, data) {
//   let usersList = document.querySelector(".card-info__container-users-icons");
//   let allUsers = document.querySelectorAll(".user-search__form--user-list");
//   allUsers.forEach((el) => {
//     el.addEventListener("click", (event) => {
//       let target = event.currentTarget;
//       let userName = target.children[1].innerText;
//       const getKey = JSON.parse(localStorage.getItem("tasksArray"));
//       getKey.forEach((ele) => {
//         if (ele.id === obj.id) {
//           if (!ele["users"]) {
//             ele["users"] = [userName];
//           } else {
//             ele["users"].push(userName);
//           }
//         }
//       });
//       let user = document.createElement("div");
//       user.innerHTML = userName;
//       user.className = "classUser";
//       usersList.append(user);
//       localStorage.setItem("tasksArray", JSON.stringify(getKey));
//     });
//   });
// }

export function catchUserInModalCard(obj) {
  let allUsers = document.querySelectorAll(".user-search__form--user-list");
  allUsers.forEach((el) => {
    el.addEventListener("click", (event) => {
      let target = event.currentTarget;
      let userName = target.children[1].innerText;
      findUserInServer(userName).then((data) => {
        createUserCard(obj, data, "добавить на карточку", saveUserOnCard);
      });
    });
  });
}

export function catchUser(obj) {
  const listenerUsers = document.querySelector(
    ".card-info__container-users-icons"
  );
  listenerUsers.addEventListener("click", (event) => {
    let target = event.target;
    if (target.matches(".classUser")) {
      console.log(target.innerText);
    }
  });
}

function saveUserOnCard(obj, data) {
  let usersList = document.querySelector(".card-info__container-users-icons");
  const userName = data.name
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
  document.querySelector(".usercard__wrapper").remove();
}
