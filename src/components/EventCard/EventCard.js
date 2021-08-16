import styles from "./EventCard.css"
import { EventCardTemplate } from "./EventCardTemplate"

export function EventCard(title, text) {
    this.component = EventCardTemplate.content.querySelector('div').cloneNode(true)
    this.component.querySelector('.eventCard__title').innerHTML = title
    this.component.querySelector('.eventCard__text').innerHTML = text
    this.render = function () {
        const body = document.querySelector(".container-global")
        body.append(this.component)
      }
  }