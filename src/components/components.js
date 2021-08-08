export function addArea() {
  const input = document.createElement("div");
  input.innerHTML = `<textarea class="card_task"></textarea>`;
  let container = document.querySelector(".textarea");
  return container.append(input);
}

export function addTask(className, text) {
  let node = document.createElement("div");
  node.className = `task ${className}`;
  node.innerHTML = text;
  let container = document.querySelector(".card_list-tasks");
  return container.append(node);
}

export function addTasksToCardsFromStorage() {
  for (let key in localStorage) {
    if (!localStorage.hasOwnProperty(key) || key == "cal") {
      continue;
    }
    let task = JSON.parse(localStorage.getItem(key));
    addTask(task.class, task.title);
  }
}
