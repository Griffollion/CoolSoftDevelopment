import styles from "./LimitCard.css"
import { LimitCardTemplate } from "./LimitCardTemplate"

export function LimitCard(node) {
this.component = LimitCardTemplate.content.querySelector('div').cloneNode(true)
this.render = function () {
    const body = document.querySelector(node)
    body.append(this.component)
  }
}