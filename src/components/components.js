import { Button } from "./Buttons/Button";
import { NewCard } from "./NewCard/NewCard";
import { Data } from "./Data/Data";
import { createCard } from "./Card/Card";
import { GetDataFromServer, CreateUsersTemplate, ToCloseModalUsersTemplate } from "./UserSearch/UserSearch"
import {
  addArea,
  saveValue,
  callModalWindow,
  relocationTask,
  deleteTask,
  closeCard,
  closeLimit,
  closeEvent,
} from "../initUserInterface";
import { LimitCard } from "./LimitCard/LimitCard";
import { EventCard } from "./EventCard/EventCard";


export function loadCards() {
  const cardToDo = new createCard("todo");
  cardToDo.render();

  const cardInProgress = new createCard("in_progress");
  cardInProgress.render();

  const cardDone = new createCard("done");
  cardDone.render();

  const cardButton = new Button(
    "",
    ".card__button",
    "+ Добавить карточку",
    addArea
  );
  cardButton.render();
}

function getUsersSearch () {
  const loadUsersTemplate = new CreateUsersTemplate('.container-global');
  loadUsersTemplate.render();
  GetDataFromServer();

  const closeModalFromExit = document.querySelector('.user-search__header--exit')
  const closeVodalFromOverlay = document.querySelector('.overlay')

  closeModalFromExit.addEventListener('click', ToCloseModalUsersTemplate)
  closeVodalFromOverlay.addEventListener('click', ToCloseModalUsersTemplate)
}

export function loadNewCard(obj) {
  const newCard = new NewCard(obj);
  newCard.render();

  const usersButton = new Button("icn__btnuser", ".user", "Участники", getUsersSearch);
  usersButton.render();

  const dateButton = new Button("icn__btnaccess_time", ".data", "Дата");
  dateButton.render();

  const movButton = new Button(
    "icn__btnarrow-right2",
    ".moving",
    "Перемещение",
    createEventCard("move", "move?", "move", relocationTask),
    obj
    // callModalWindow,
  );
  movButton.render();
  

  const delButton = new Button(
    "icn__btnvideo_label",
    ".archiving",
    "Архивация",
    createEventCard("del", "del?", "delete", deleteTask),
    obj
  );
  delButton.render();


  const cancelButton = new Button(
    "icn__btnattachment",
    ".save",
    "Сохранить",
    closeCard);
  cancelButton.render();

  const closeButton = new Button(
    "",
    ".close",
    "X",
    closeCard);
  closeButton.render();

  const inputData = new Data(".container-term-btn__data", obj);
  inputData.render();

  saveValue(".myDate", obj, "data");
  saveValue(".textarea-description", obj, "description");
  saveValue(".textarea-actions", obj, "comment");
  saveValue(".new__card-header-name", obj, "title");
}

// export function loadModalWindow(obj, direction) {
//   const modalWindow = new ModalWindow();
//   const relocationButton = new Button("", ".", direction, relocationTask, obj);
//   cancelButton.render();
//   const cancelButton = new Button("", ".", "отмена");
//   cancelButton.render();
//   modalWindow.render();
// }

export function createLimitCard(){
  const limitCard = new LimitCard(".container-global")
  limitCard.render()

  const okButton = new Button(
  "",
  ".close",
  "Ок",
  closeLimit
  )
  okButton.render()
}

export function createEventCard(title,text, btn, func){
  const eventCard = new EventCard(title, text, ".container-global")
  eventCard.render()

  const cancelButton = new Button (
    "",
  ".cancel",
  "Отменить",
  closeEvent 
  )
cancelButton.render()

const delButton = new Button (
  "",
  ".event",
  btn,
  func
)
delButton.render()
}