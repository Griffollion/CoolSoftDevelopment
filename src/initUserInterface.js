import {
  loadNewCard,
  createEventCard,
  createLimitCard,
} from "./components/components";

import {
  GetDataFromServer,
  CreateUsersTemplate,
  ToCloseModalUsersTemplate,
} from "./components/UserSearch/UserSearch";

import {
  DataCard,
  getInputDataValue,
  closeDataCard,
} from "./components/DataCard/DataCard"

export function addArea() {
  if (document.querySelector(".card_task")) {
    return;
  } else {
    const input = document.createElement("div");
    input.innerHTML = `<textarea class="card_task"></textarea>`;
    let container = document.querySelector(".textarea");
    return container.append(input);
  }
}

export function cancelArea() {
  if (document.querySelector(".card_task")) {
    document.querySelector(".card_task").remove();
  }
}

export function addTask(className, text, id) {
  let node = document.querySelector(".card-task").cloneNode(true);
  node.className = `task ${className}`;
  node.id = `${id}`;
  node.innerHTML = text;
  let container = document.querySelector(`#${className}`);
  container.append(node);
}

export function addTasksToCardsFromStorage() {
  let tasksArr = JSON.parse(localStorage.getItem("tasksArray"));
  if (tasksArr) {
    tasksArr.forEach((element) => {
      addTask(element.position, element.title, element.id);
    });
  }
}

export function loadCurrentTask() {
  let allTask = document.querySelectorAll(".task");
  allTask.forEach((el) => {
    el.addEventListener("click", (event) => {
      let target = event.currentTarget;
      let currentTask = findTaskIntoStorage(target.id);
      loadNewCard(currentTask);
    });
  });
}

export function findTaskIntoStorage(currentId) {
  let array = JSON.parse(localStorage.getItem("tasksArray"));
  let currentTask = array.filter((el) => el.id == currentId);
  return currentTask[0];
}

export function saveValue(item, currentTask, key) {
  const input = document.querySelector(item);
  input.addEventListener("change", () => {
    const getKey = JSON.parse(localStorage.getItem("tasksArray"));
    getKey.forEach((ele) => {
      if (ele.id === currentTask.id) {
        ele[key] = input.value;
      }
    });
    if (key == "title") {
      document.getElementById(currentTask.id).innerHTML = input.value;
    }
    localStorage.setItem("tasksArray", JSON.stringify(getKey));
  });
}

export function callEventWindow(obj) {
  switch (obj.position) {
    case "todo":
      let cardsInProgress = document.querySelectorAll(".in_progress");
      if (cardsInProgress.length >= 6) {
        createLimitCard();
      } else {
        createEventCard(
          obj,
          "Перемещение карточки",
          "переместить в колонку IN PROGRESS",
          relocationTask
        );
      }
      break;
    case "in_progress":
      createEventCard(
        obj,
        "Перемещение карточки",
        "переместить в колонку DONE",
        relocationTask
      );
      break;
    case "done":
      createEventCard(
        obj,
        "Перемещение карточки",
        "переместить в колонку TODO",
        relocationTask
      );
  }
}

export function relocationTask(obj) {
  switch (obj.position) {
    case "todo":
      transferTask(obj, "in_progress");
      break;
    case "in_progress":
      transferTask(obj, "done");
      break;
    case "done":
      clearTask(obj);
      transferTask(obj, "todo");
  }
  document.querySelector(".wrapper__new-card").remove();
}

export function transferTask(obj, card) {
  let activeTask = document.getElementById(`${obj.id}`);
  let destination = document.querySelector(`#${card}`);
  activeTask.classList.remove(obj.position);
  activeTask.classList.add(card);
  destination.append(activeTask);
  document.querySelector(".wrapper_eventCard").remove();
  const getKey = JSON.parse(localStorage.getItem("tasksArray"));
  getKey.forEach((ele) => {
    if (ele.id === obj.id) {
      ele.position = card;
    }
  });
  localStorage.setItem("tasksArray", JSON.stringify(getKey));
}

export function closeNewCard() {
  document.querySelector(".wrapper__new-card").remove();
}

export function closeLimit() {
  document.querySelector(".wrapper_limitCard").remove();
}

export function closeEvent() {
  document.querySelector(".wrapper_eventCard").remove();
}

export function closeMenu() {
  document.querySelector(".wrapper_menu").remove();
}

export function callDeleteCard(obj) {
  createEventCard(obj, "Архивация", "удалить задачу?", deleteTask);
}

export function deleteTask(obj) {
  let tasksArr = JSON.parse(localStorage.getItem("tasksArray"));
  let index = tasksArr.findIndex((el) => el.id == obj.id);
  document.getElementById(`${obj.id}`).remove();
  document.querySelector(".wrapper__new-card").remove();
  document.querySelector(".wrapper_eventCard").remove();
  tasksArr.splice(index, 1);
  localStorage.setItem("tasksArray", JSON.stringify(tasksArr));
}

export function clearTask(obj) {
  const getKey = JSON.parse(localStorage.getItem("tasksArray"));
  getKey.forEach((ele) => {
    if (ele.id === obj.id) {
      ele.data = "";
      ele.description = "";
      ele.comment = "";
      ele["users"] = [];
    }
  });
  localStorage.setItem("tasksArray", JSON.stringify(getKey));
}

export function callEventMenu(param) {
  switch (param) {
    case "todo":
      createEventCard(
        param,
        "Удаление списка",
        "очистить список TODO?",
        deleteСard
      );

      break;
    case "in_progress":
      createEventCard(
        param,
        "Удаление списка",
        "очистить список IN_PROGRESS? ",
        deleteСard
      );
      break;
    case "done":
      createEventCard(
        param,
        "Удаление списка",
        "очистить список DONE?",
        deleteСard
      );
      break;
    case "task":
      createEventCard(
        param,
        "Удаление списка",
        "очистить весь список?",
        deleteAllCards
      );
  }
}

export function deleteСard(param) {
  let tasksArr = JSON.parse(localStorage.getItem("tasksArray"));
  let deleteCards = document.querySelectorAll(`.${param}`);
  for (let el of deleteCards) {
    el.remove();
  }
  document.querySelector(".wrapper_menu").remove();
  document.querySelector(".wrapper_eventCard").remove();
  let newArr = tasksArr.filter((el) => el.position != param);
  if (newArr == undefined) newArr = [];
  localStorage.setItem("tasksArray", JSON.stringify(newArr));
}

export function deleteAllCards() {
  let deleteCards = document.querySelectorAll(`.task`);
  for (let el of deleteCards) {
    el.remove();
  }
  document.querySelector(".wrapper_menu").remove();
  document.querySelector(".wrapper_eventCard").remove();
  let tasksArr = [];
  localStorage.setItem("tasksArray", JSON.stringify(tasksArr));
}

export function getDateCard(obj) {
  const dataCard = new DataCard(obj);
  dataCard.render();

  getInputDataValue(obj);

  const closeDateCard = document.querySelector(".card__header-close");
  closeDateCard.addEventListener("click", closeDataCard);
}

export function getUsersSearch(obj) {
  const loadUsersTemplate = new CreateUsersTemplate();
  loadUsersTemplate.render();
  GetDataFromServer(obj);

  const closeModalFromExit = document.querySelector(
    ".user-search__header--exit"
  );
  const closeVodalFromOverlay = document.querySelector(".overlay");

  closeModalFromExit.addEventListener("click", ToCloseModalUsersTemplate);
  closeVodalFromOverlay.addEventListener("click", ToCloseModalUsersTemplate);
}
