import { createEventCard } from "./components/components";

export function callDeleteCard(obj) {
  createEventCard(obj, "Архивация", "удалить задачу?", deleteTask);
}

function deleteTask(obj) {
  let tasksArr = JSON.parse(localStorage.getItem("tasksArray"));
  let index = tasksArr.findIndex((el) => el.id == obj.id);
  document.getElementById(`${obj.id}`).remove();
  document.querySelector(".wrapper__new-card").remove();
  document.querySelector(".wrapper_eventCard").remove();
  tasksArr.splice(index, 1);
  localStorage.setItem("tasksArray", JSON.stringify(tasksArr));
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

function deleteСard(param) {
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

function deleteAllCards() {
  let deleteCards = document.querySelectorAll(`.task`);
  for (let el of deleteCards) {
    el.remove();
  }
  document.querySelector(".wrapper_menu").remove();
  document.querySelector(".wrapper_eventCard").remove();
  let tasksArr = [];
  localStorage.setItem("tasksArray", JSON.stringify(tasksArr));
  localStorage.setItem("cal", 0)
}
