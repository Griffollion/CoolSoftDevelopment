import { loadNewCard } from "./components/components";

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
