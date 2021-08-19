import { Button } from "./Buttons/Button";
import { NewCard } from "./NewCard/NewCard";
import { Data } from "./Data/Data";
import { createCard } from "./Card/Card";
import { EventCard } from "./EventCard/EventCard";
import { LimitCard } from "./LimitCard/LimitCard";
import {
  addArea,
  cancelArea,
  saveValue,
  closeLimit,
  callEventWindow,
  callDeleteCard,
  closeNewCard,
  closeEvent,
  closeMenu,
  callEventMenu,
  getDateCard,
  getUsersSearch
} from "../initUserInterface";
import { MenuCard } from "./MenuCard/MenuCard";



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

  const cancelButton = new Button(
    "",
    ".card__button",
    "отмена",
    cancelArea
  );
  cancelButton.render();
}

export function loadNewCard(obj) {
  const newCard = new NewCard(obj);
  newCard.render();

  const usersButton = new Button(
    "icn__btnuser",
    ".user",
    "Участники",
    getUsersSearch,
    obj
  );
  usersButton.render();

  const dateButton = new Button(
    "icn__btnaccess_time",
    ".data",
    "Дата",
    getDateCard,
    obj
  );
  dateButton.render();

  const movButton = new Button(
    "icn__btnarrow-right2",
    ".moving",
    "Перемещение",
    callEventWindow,
    obj
  );
  movButton.render();

  const delButton = new Button(
    "icn__btnvideo_label",
    ".archiving",
    "Архивация",
    callDeleteCard,
    obj
  );
  delButton.render();

  const cancelButton = new Button(
    "icn__btnattachment",
    ".save",
    "Сохранить",
    closeNewCard
  );
  cancelButton.render();

  const closeButton = new Button("", ".close", "X", closeNewCard);
  closeButton.render();

  const inputData = new Data(".container-term-btn__data", obj);
  inputData.render();

  if (obj.position != "todo") {
    let inputAreas = document.querySelectorAll(".user-content");
    for (let el of inputAreas) {
      el.setAttribute("disabled", true);
    }
  }

  saveValue(".myDate", obj, "data");
  saveValue(".textarea-description", obj, "description");
  saveValue(".textarea-actions", obj, "comment");
  saveValue(".new__card-header-name", obj, "title");
}

export function createLimitCard() {
  const limitCard = new LimitCard();
  limitCard.render();
  const okButton = new Button(
    "",
    ".limitCard__footer_button",
    "Ок",
    closeLimit
  );
  okButton.render();
}

export function createEventCard(obj, title, text, callback) {
  const eventCard = new EventCard(title, text);
  eventCard.render();

  const cancelButton = new Button("", ".cancel", "Отменить", closeEvent);
  cancelButton.render();

  const moveButton = new Button("", ".event", "Да", callback, obj);
  moveButton.render();
}


export function createMenuCard() {
  const menuCard = new MenuCard()
  menuCard.render()

  const clsMenu = new Button(
    "",
    ".menu_header-close",
    "X",
    closeMenu,
  )
  clsMenu.render()

  const clearToDo = new Button(
    "",
    ".clrtodo",
    "Очистить todo",
    callEventMenu,
    "todo"
  )
  clearToDo.render()

  const clearInPrcs = new Button(
    "",
    ".clrinprcs",
    "Очистить in progress",
    callEventMenu,
    "in_progress"
  )
  clearInPrcs.render()

  const clearDone = new Button(
    "",
    ".clrdone",
    "Очистить done",
    callEventMenu,
    "done"
  )
  clearDone.render()

  const clearAll = new Button(
    "",
    ".clrall",
    "Очистить всё",
    callEventMenu,
    "task"
  )
  clearAll.render()
}