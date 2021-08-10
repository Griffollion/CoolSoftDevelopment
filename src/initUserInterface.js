import { loadNewCard } from "./components/components";

export function addArea() {
  if (document.querySelector(".card_task")) {
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
  let container = document.querySelector(".card_list-tasks");
  return container.append(node);
}

export function addTasksToCardsFromStorage() {
  let tasksArr = JSON.parse(localStorage.getItem("tasksArray"));
  if (tasksArr) {
    tasksArr.forEach((element) => {
      addTask(element.class, element.title, element.id);
    });
  }
}

export function loadCurrentTask() {
  let allTask = document.querySelectorAll(".task");
  allTask.forEach((el) => {
    el.addEventListener("click", (event) => {
      let target = event.currentTarget;
      let currentTask = findTaskIntoStorage(target.id)
      loadNewCard(currentTask);
    });
  });
}

export function findTaskIntoStorage(currentId){
  let array = JSON.parse(localStorage.getItem("tasksArray"))
  let currentTask = array.filter(el => el.id == currentId)
  return currentTask[0]
}

export function saveDataValue (box, item) {
  const container = document.querySelector(box)
  container.addEventListener('change', () => {
    const getKey = JSON.parse(localStorage.getItem('tasksArray'))
    getKey.forEach(ele => {
      getKey[ele.id].data = item.value
      console.log(getKey)
      const getKeystr = JSON.stringify(getKey)
      localStorage.setItem('tasksArray', getKeystr)
    })
  })
}

export function saveDescriptionValue (box, item) {
  const container = document.querySelector(box)
  container.addEventListener('change', () => {
    const getKey = JSON.parse(localStorage.getItem('tasksArray'))
    getKey.forEach(ele => {
      getKey[ele.id].description = item.value
      console.log(getKey)
      const getKeystr = JSON.stringify(getKey)
      localStorage.setItem('tasksArray', getKeystr)
    })
  })
}

export function saveCommentValue (box, item) {
  const container = document.querySelector(box)
  container.addEventListener('change', () => {
    const getKey = JSON.parse(localStorage.getItem('tasksArray'))
    getKey.forEach(ele => {
      getKey[ele.id].comment = item.value
      console.log(getKey)
      const getKeystr = JSON.stringify(getKey)
      localStorage.setItem('tasksArray', getKeystr)
    })
  })
}