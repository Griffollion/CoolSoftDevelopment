import { createEventCard, createLimitCard } from "./components/components";

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

function relocationTask(obj) {
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

function transferTask(obj, card) {
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

function clearTask(obj) {
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
