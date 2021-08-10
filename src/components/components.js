import { Button } from "./Buttons/Button";
import { NewCard } from "./NewCard/NewCard";
import { Data } from "./Data/Data";
import { createCard } from "./Card/Card";
import { addArea, saveValue, loadCurrentTask } from "../initUserInterface";


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

export function loadNewCard(obj) {
  const newCard = new NewCard(".container-global", obj);
  newCard.render();

  const usersButton = new Button("icn__btnuser", ".user", "Участники");
  usersButton.render();

  const dateButton = new Button("icn__btnaccess_time", ".data", "Дата");
  dateButton.render();

  const movButton = new Button(
    "icn__btnarrow-right2",
    ".moving",
    "Перемещение"
  );
  movButton.render();

  const copyButton = new Button(
    "icn__btncontent_copy",
    ".copying",
    "Копирование"
  );
  copyButton.render();

  const delButton = new Button(
    "icn__btnvideo_label",
    ".archiving",
    "Архивация"
  );
  delButton.render();

  const cancelButton = new Button(
    "", 
    ".save", 
    "Сохранить");
  cancelButton.render();

  const showButton = new Button(
    "",
    ".card-info__actions-btn",
    "Показать подробности"
  );
  showButton.render();

  const changeButton = new Button(
    "",
    ".card-info__description-btn",
    "Изменить"
  );
  changeButton.render();

  const inputData = new Data(".container-term-btn__data");
  inputData.render();


  saveDataValue('.myDate', obj, 'data')
  saveDataValue('.textarea-description', obj, 'description')
  saveDataValue('.textarea-actions', obj, 'comment')

}
