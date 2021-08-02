import styles from './NewCard.css'
import { NewCardTemplate } from './NewCardTemplate'

export function NewCard () {
  this.component = NewCardTemplate.content.querySelector('div').cloneNode(true)
  this.render = function (node) {
    const container = document.querySelector(node)
    container.append(this.component)
  }
}
