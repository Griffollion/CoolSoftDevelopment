import { Button } from "./Buttons/Button";
import { NewCard } from "./NewCard/NewCard";
import { Data } from "./Data/Data";
import { CreateCard } from "./Card/Card";
import { EventCard } from "./EventCard/EventCard";
import { LimitCard } from "./LimitCard/LimitCard";
import { MenuCard } from "./MenuCard/MenuCard";
import { DataCard, getInputDataValue } from "./DataCard/DataCard";
import { UserCard } from "./UserCard/UserCard";
import { UsersSearch } from "./UserSearch/UserSearch";
import { addArea, cancelArea, saveValue } from "../initUserInterface";
import { callDeleteCard, callEventMenu } from "../removing";
import { callEventWindow } from "../moving/";
import {
  GetDataFromServer,
  catchUser,
  catchUserInModalCard,
} from "../usersAction/";
import { func } from "assert-plus";

// создание списков todo, in progress, done

export function loadCards() {
  const cardToDo = new CreateCard("todo");
  cardToDo.render();

  const cardInProgress = new CreateCard("in_progress");
  cardInProgress.render();

  const cardDone = new CreateCard("done");
  cardDone.render();

  const cardButton = new Button("", ".card__button", "+ Добавить", addArea);
  cardButton.render();

  const cancelButton = new Button("", ".card__button", "отмена", cancelArea);
  cancelButton.render();
}

// вызов карточки с данными задачи

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

  catchUser(obj);
}

function closeNewCard() {
  document.querySelector(".wrapper__new-card").remove();
}

// функция вызова даты на карточке

function getDateCard(obj) {
  const dataCard = new DataCard(obj);
  dataCard.render();

  getInputDataValue(obj);

  const closeDateCard = document.querySelector(".card__header-close");
  closeDateCard.addEventListener("click", closeDataCard);
}

function closeDataCard() {
  document.querySelector(".date__card-wrapper").remove();
}

// вызов окна с участниками

function getUsersSearch(obj) {
  GetDataFromServer().then((data) => {
    const cardUsersSearch = new UsersSearch(data);
    cardUsersSearch.render();

    catchUserInModalCard(obj);

    const closeModalFromExit = document.querySelector(
      ".user-search__header--exit"
    );
    closeModalFromExit.addEventListener("click", ToCloseModalUsersTemplate);
  });
}

function ToCloseModalUsersTemplate() {
  document.querySelector(".popup__users-template").remove();
}

// вызов модального окна участника задачи

export function createUserCard(obj, data, title, callback) {
  const cardUser = new UserCard(data);
  cardUser.render();

  const cardUserButton = new Button(
    "",
    ".usercard__button",
    title,
    callback,
    obj,
    data
  );
  cardUserButton.render();

  document.querySelector(".usercard__header-close").onclick = () => {
    document.querySelector(".usercard__wrapper").remove();
  };
}

// вызов модального окна на лимит задач

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

function closeLimit() {
  document.querySelector(".wrapper_limitCard").remove();
}

// вызов модального окна на подтверждение действия

export function createEventCard(obj, title, text, callback) {
  const eventCard = new EventCard(title, text);
  eventCard.render();

  const cancelButton = new Button("", ".cancel", "Отменить", closeEvent);
  cancelButton.render();

  const moveButton = new Button("", ".event", "Да", callback, obj);
  moveButton.render();
}

function closeEvent() {
  document.querySelector(".wrapper_eventCard").remove();
}

// вызов окна меню очистки списков

export function createMenuCard() {
  const menuCard = new MenuCard();
  menuCard.render();

  const clsMenu = new Button("", ".menu_header-close", "X", closeMenu);
  clsMenu.render();

  const clearToDo = new Button(
    "",
    ".clrtodo",
    "Очистить todo",
    callEventMenu,
    "todo"
  );
  clearToDo.render();

  const clearInPrcs = new Button(
    "",
    ".clrinprcs",
    "Очистить in progress",
    callEventMenu,
    "in_progress"
  );
  clearInPrcs.render();

  const clearDone = new Button(
    "",
    ".clrdone",
    "Очистить done",
    callEventMenu,
    "done"
  );
  clearDone.render();

  const clearAll = new Button(
    "",
    ".clrall",
    "Очистить всё",
    callEventMenu,
    "task"
  );
  clearAll.render();
}

function closeMenu() {
  document.querySelector(".wrapper_menu").remove();
}
