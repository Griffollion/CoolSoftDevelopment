import { Button } from "./Buttons/Button";
import { NewCard } from "./NewCard/NewCard";
import { Data } from "./Data/Data";
import { createCard } from "./Card/Card";
import {
  addArea,
  saveValue,
  callModalWindow,
  relocationTask,
} from "../initUserInterface";

export function loadCards() {
  const cardToDo = new createCard("todo");
  cardToDo.render(".container-cards");

  const cardInProgress = new createCard("in_progress");
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
    "Перемещение",
    relocationTask,
    obj
    // callModalWindow,
  );
  movButton.render();
  

  const delButton = new Button(
    "icn__btnvideo_label",
    ".archiving",
    "Архивация"
  );
  delButton.render();

  const cancelButton = new Button("icn__btnattachment", ".save", "Сохранить");
  cancelButton.render();

  const inputData = new Data(".container-term-btn__data");
  inputData.render();

  saveValue(".myDate", obj, "data");
  saveValue(".textarea-description", obj, "description");
  saveValue(".textarea-actions", obj, "comment");
}

// export function loadModalWindow(obj, direction) {
//   const modalWindow = new ModalWindow();
//   const relocationButton = new Button("", ".", direction, relocationTask, obj);
//   cancelButton.render();
//   const cancelButton = new Button("", ".", "отмена");
//   cancelButton.render();
//   modalWindow.render();
// }

