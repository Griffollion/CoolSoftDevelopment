import styles from "./Card.css";
import { CardTemplate} from "./CardTemplate"



export function createCard(title) {
  this.component = CardTemplate.content.querySelector("div").cloneNode(true);
  this.component.querySelector('.card_list-tasks').setAttribute('id', title)
  this.component.querySelector('.card__title-text').innerHTML = title
  this.render = function () {
    const container = document.querySelector(".container-cards");
    container.append(this.component);
  };
}

