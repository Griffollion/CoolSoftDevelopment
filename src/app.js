import styles from "./css/styles.css";
import {
  addTask,
  addTasksToCardsFromStorage,
  loadCurrentTask,
} from "./initUserInterface"
import { loadCards } from "./components/components";
import { getUsersSearch } from "./components/components"

getUsersSearch()

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
  if (isClick) {
    content.addEventListener("change", () => {
      let cal = +localStorage.getItem("cal");
      cal++;
      let task = {
        title: content.value,
        position: 'todo',
        id: cal,
      };
      tasksArray.push(task);
      localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
      addTask(task.position, content.value, cal);
      localStorage.setItem("cal", cal);
      content.remove();
      isClick = true;
      // document.location.reload();
    });
  }
  isClick = false;
  
};

loadCurrentTask()
