export function addArea() {
  if (document.querySelector(".card_task")){
  } else {
  const input = document.createElement("div");
  input.innerHTML = `<textarea class="card_task"></textarea>`;
  let container = document.querySelector(".textarea");
  return container.append(input);
  }
}

export function addTask(className, text) {
  let node = document.createElement("div");
  node.className = `task ${className}`;
  node.innerHTML = text;
  let container = document.querySelector(".card_list-tasks");
  return container.append(node);
}

export function addTasksToCardsFromStorage(){
  let tasksArr = JSON.parse(localStorage.getItem("tasksArray"))
  if (tasksArr) {
    tasksArr.forEach(element => {
      addTask(element.class, element.title)
    });
  } 
}