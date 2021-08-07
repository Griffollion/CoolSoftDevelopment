export function addArea() {
  const input = document.createElement("div");
  input.innerHTML = `<textarea class="card_task"></textarea>`;
  let container = document.querySelector(".textarea");
  return container.append(input);
}

export function addTask(tag) {
  tag.className = "task in_done";
  let container = document.querySelector(".card_list-tasks");
  return container.append(tag);
}
