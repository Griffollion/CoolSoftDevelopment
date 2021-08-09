import styles from "./Card.css";
import { CardTemplate } from "./CardTemplate";



export function createCard(title) {
  this.component = CardTemplate.content.querySelector("div").cloneNode(true);
  this.component.querySelector('.card__title-text').setAttribute("id", title)
  this.component.querySelector('.card__title-text').innerHTML = title
  this.render = function (node) {
    const container = document.querySelector(node);
    container.append(this.component);
  };
}

