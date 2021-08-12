import { loadNewCard, loadModalWindow } from "./components/components";

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

export function addTask(className, text, id) {
  let node = document.createElement("div");
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
    localStorage.setItem("tasksArray", JSON.stringify(getKey));
  });
}

export function transferTask(obj, card) {
  let activeTask = document.getElementById(`${obj.id}`);
  let destination = document.querySelector(`#${card}`);
  activeTask.classList.remove(obj.position)
  activeTask.classList.add(card)
  destination.append(activeTask);
  const getKey = JSON.parse(localStorage.getItem("tasksArray"));
  getKey.forEach((ele) => {
    if (ele.id === obj.id) {
      ele.position = card;
    }
  });
  localStorage.setItem("tasksArray", JSON.stringify(getKey));
}


// export function callModalWindow(obj){
//   switch (obj.position){
//     case 'todo':
//     loadModalWindow(obj, 'переместить в колонку IN PROGRESS')
//     break
//     case 'in_progress':
//     loadModalWindow(obj, 'переместить в колонку DONE')
//     break
//     case 'done':
//     loadModalWindow(obj, 'переместить в колонку TODO')
// }
// }

export function relocationTask(obj) {
  switch (obj.position) {
    case "todo":
      transferTask(obj, "in_progress");
      break;
    case "in_progress":
      transferTask(obj, "done");
      break;
    case "done":
      transferTask(obj, "todo");
  }
  document.querySelector(".new__card").remove();
}

export function closeCard (btnclass) {
  if (document.querySelector('.new__card')) {
    document.querySelector(btnclass).onclick = function () {
      document.querySelector('.new__card').remove()
    }
  }

}
