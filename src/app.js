import styles from "./css/styles.css";
import { addArea, addTask, addTasksToCardsFromStorage } from "./components/components";
import { Button } from "./components/Buttons/Button";
import { NewCard } from "./components/NewCard/NewCard";
import { Data } from "./components/Data/Data";
import { createCard } from "./components/Card/Card";

const cardToDo = new createCard("todo");
cardToDo.render(".container-cards");

const cardInProgress = new createCard("in progress");
cardInProgress.render(".container-cards");

const cardDone = new createCard("done");
cardDone.render(".container-cards");


const cardButton = new Button(
  "",
  ".card__button",
  "+ Добавить карточку",
  addArea
);
cardButton.render();

const newCard = new NewCard(".container-global");
newCard.render();

const usersButton = new Button("icn__btnuser", ".user", "Участники");
usersButton.render();
const dateButton = new Button("icn__btnaccess_time", ".data", "Дата");
dateButton.render();
const movButton = new Button("icn__btnarrow-right2", ".moving", "Перемещение");
movButton.render();
const copyButton = new Button(
  "icn__btncontent_copy",
  ".copying",
  "Копирование"
);
copyButton.render();
const delButton = new Button("icn__btnvideo_label", ".archiving", "Архивация");
delButton.render();
const showButton = new Button(
  "",
  ".card-info__actions-btn",
  "Показать подробности"
);
showButton.render();
const changeButton = new Button("", ".card-info__description-btn", "Изменить");
changeButton.render();

const inputData = new Data(".container-term-btn__data");
inputData.render();

if (!localStorage.getItem("cal")) {
  localStorage.setItem("cal", 0);
}

let tasksArray = []
if (localStorage.getItem("tasksArray")) {
  tasksArray = JSON.parse(localStorage.getItem("tasksArray"))
  addTasksToCardsFromStorage()
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
    tasksArray.push(task)
    localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
    cal++;
    localStorage.setItem("cal", cal);
    content.remove();
    addTask(task.class, content.value);
  });
};
