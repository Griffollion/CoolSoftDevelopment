import { Button } from "./Buttons/Button";
import { NewCard } from "./NewCard/NewCard";
import { Data } from "./Data/Data";
import { createCard } from "./Card/Card";
import { addArea, saveValue } from "../initUserInterface"
import { GetDataFromServer, CreateUsersTemplate, GetUsersSearchModal, getUsersSearchModal } from "./UserSearch/UserSearch"
import { closeCard } from "../initUserInterface";



export function loadCards() {
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
}

export function getUsersSearch() {
  const loadUsersTemplate = new CreateUsersTemplate('.container-global');
  loadUsersTemplate.render();
  GetDataFromServer()
}

export function loadNewCard(obj) {
  const newCard = new NewCard(".container-global", obj);
  newCard.render();

  const usersButton = new Button("icn__btnuser", ".user", "Участники", getUsersSearchModal);
  usersButton.render();

  const dateButton = new Button("icn__btnaccess_time", ".data", "Дата");
  dateButton.render();

  const movButton = new Button(
    "icn__btnarrow-right2",
    ".moving",
    "Перемещение"
  );
  movButton.render();

  const delButton = new Button(
    "icn__btnvideo_label",
    ".archiving",
    "Архивация"
  );
  delButton.render();

  const cancelButton = new Button(
    "icn__btnattachment",
    ".save",
    "Сохранить",
    closeCard('.save'));
  cancelButton.render();

  const closeButton = new Button(
    "",
    ".close",
    "X",
    closeCard('.close'));
  closeButton.render();

  const inputData = new Data(".container-term-btn__data");
  inputData.render();


  saveValue('.myDate', obj, 'data')
  saveValue('.textarea-description', obj, 'description')
  saveValue('.textarea-actions', obj, 'comment')

}


