import styles from "./css/styles.css";
import {
  addTask,
  addTasksToCardsFromStorage,
  loadCurrentTask,
} from "./initUserInterface";
import { loadCards, createMenuCard } from "./components/components";

loadCards();

if (localStorage.getItem("tasksArray")) {
  addTasksToCardsFromStorage();
}

let textArea = document.querySelector(".textarea");
let isClick = true;
textArea.onclick = function () {
  let content = document.querySelector(".card_task");
  if (isClick) {
    content.addEventListener("change", () => {
      if (!localStorage.getItem("cal")) {
        localStorage.setItem("cal", 0);
      }
      let cal = +localStorage.getItem("cal");
      cal++;
      let task = {
        title: content.value,
        position: "todo",
        id: cal,
      };
      let tasksArray;
      if (!localStorage.getItem("tasksArray")) {
        tasksArray = [];
      } else {
        tasksArray = JSON.parse(localStorage.getItem("tasksArray"));
      }
      tasksArray.push(task);
      localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
      addTask(task.position, content.value, cal);
      localStorage.setItem("cal", cal);
      content.remove();
      isClick = true;
      loadCurrentTask();
    });
  }
  isClick = false;
};

loadCurrentTask();

const menu = document.querySelector(".icon-users");
menu.addEventListener("click", createMenuCard);
