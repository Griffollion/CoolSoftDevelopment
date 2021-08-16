import styles from "./LimitCard.css"
import { LimitCardTemplate } from "./LimitCardTemplate"

export function LimitCard() {
this.component = LimitCardTemplate.content.querySelector('div').cloneNode(true)
this.render = function () {
    const body = document.querySelector(".container-global")
    body.append(this.component)
  }
}