// export async function GetDataFromServer(obj) {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     data.forEach(function (el) {
//       const userListPlace = document.querySelector("#app");
//       userListPlace.insertAdjacentHTML("beforeend", renderUser(el));
//     });
//     catchUser(obj);
//   }

  export async function GetDataFromServer() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data     
  }
  
  
  export function catchUser(obj) {
    let usersList = document.querySelector(".card-info__container-users-icons");
    let allUsers = document.querySelectorAll(".user-search__form--user-list");
    allUsers.forEach((el) => {
      el.addEventListener("click", (event) => {
        let target = event.currentTarget;
        let userName = target.children[1].innerText;
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
  