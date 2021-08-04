import styles from './NewCard.css'
import { NewCardTemplate } from './NewCardTemplate'

export function NewCard (node) {
  this.component = NewCardTemplate.content.querySelector('div').cloneNode(true)
  this.render = function () {
    const body = document.querySelector(node)
    body.append(this.component)
  }
}
