import styles from "./css/styles.css";
import {
  addTask,
  addTasksToCardsFromStorage,
  loadCurrentTask,
} from "./initUserInterface";
import { loadCards } from "./components/components";

loadCards();

if (!localStorage.getItem("cal")) {
  localStorage.setItem("cal", 0);
}

let tasksArray = [];
if (localStorage.getItem("tasksArray")) {
  tasksArray = JSON.parse(localStorage.getItem("tasksArray"));
  addTasksToCardsFromStorage();
}

let textArea = document.querySelector(".textarea");

let isClick = true;
textArea.onclick = function () {
  let content = document.querySelector(".card_task");
  if (isClick == true) {
    content.addEventListener("change", () => {
      let cal = +localStorage.getItem("cal");
      let task = {
        title: content.value,
        class: "in_done",
        id: cal,
      };
      tasksArray.push(task);
      localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
      content.remove();
      addTask(task.class, content.value, cal);
      cal++;
      localStorage.setItem("cal", cal);
      isClick = true;
    });
  }
  isClick = false;
};

loadCurrentTask();
