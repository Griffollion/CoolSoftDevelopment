import styles from "./css/styles.css";
import { addArea } from "./components/components";
import { addTask } from "./components/components";
import { Button } from "./components/buttons/button";
import { NewCard } from "./components/NewCard/NewCard";
import { Data } from "./components/Data/Data";
import { createCard } from "./components/card/card";
import { saveDataValue } from "./components/components";
import { saveInputValue } from "./components/components";

const cardToDo = new createCard("todo");
cardToDo.render(".container-cards");

const cardInProgress = new createCard("in progress");
cardInProgress.render(".container-cards");

const cardDone = new createCard("done");
cardDone.render(".container-cards");

const cardButton = new Button("",".card__button","+ Добавить карточку",addArea);
cardButton.render();

const newCard = new NewCard(".container-global");
newCard.render();

const usersButton = new Button("icn__btnuser", ".user", "Участники");
usersButton.render();
const dateButton = new Button("icn__btnaccess_time", ".data", "Дата");
dateButton.render();
const movButton = new Button("icn__btnarrow-right2", ".moving", "Перемещение");
movButton.render();
const copyButton = new Button("icn__btncontent_copy", ".copying", "Копирование");
copyButton.render();
const delButton = new Button("icn__btnvideo_label", ".archiving", "Архивация");
delButton.render();
const cancelButton = new Button("icn__btnplus", ".cancel", "Отмена");
cancelButton.render();
const showButton = new Button("", ".card-info__actions-btn","Показать подробности");
showButton.render();
const changeButton = new Button("", ".card-info__description-btn", "Изменить");
changeButton.render();

const inputData = new Data(".container-term-btn__data");
inputData.render();

saveDataValue('.container-term-btn__data', inputData, 'dataInput')
const inputDescription = document.querySelector('.textarea-description')
saveInputValue('.textarea-description', inputDescription, 'descriptionInput')
const inputcomment = document.querySelector('.textarea-actions')
saveInputValue('.textarea-actions', inputcomment, 'commentInput')

if (!localStorage.getItem("cal")){
    localStorage.setItem("cal", 0)
} 

const textArea = document.querySelector(".textarea");
textArea.onclick = function () {
  const content = document.querySelector(".card_task");
  const node = document.createElement("div");
  content.addEventListener("change", () => {
    node.innerHTML = content.value
    let cal = +localStorage.getItem("cal")
    localStorage.setItem(`task${cal}`, content.value);
    cal++
    localStorage.setItem("cal",cal)
    content.remove();
    addTask(node)
  });
};

