import styles from "./css/styles.css";
import {
  addTask,
  addTasksToCardsFromStorage,
  loadCurrentTask,
} from "./initUserInterface";
import { loadCards, loadNewCard } from "./components/components";
import { saveCommentValue, saveDataValue, saveDescriptionValue } from './initUserInterface'
import { UsersSearchTemplate } from './components/UserSearch/UserSearchTemplate'
import { GetDataFromServer } from './components/UserSearch/UserSearch'

UsersSearchTemplate('.users-template', 'users-searc-template')

GetDataFromServer()

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
textArea.onclick = function () {
  let content = document.querySelector(".card_task");
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
  });
};

loadCurrentTask()

const inputData = document.querySelector('.myDate')
const inputDescription = document.querySelector('.textarea-description')
const inputComment = document.querySelector('.textarea-actions')
if (document.querySelector('.template')) {
  saveDataValue('.container-term-btn__data', inputData)
  saveDescriptionValue('.textarea-description', inputDescription)
  saveCommentValue('.textarea-actions', inputComment)
}

