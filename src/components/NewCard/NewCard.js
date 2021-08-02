import styles from './NewCard.css'
import { NewCardTemplate } from './NewCardTemplate'

export function NewCard () {
  this.component = NewCardTemplate.content.querySelector('div').cloneNode(true)
  this.render = function () {
    const body = document.body
    body.append(this.component)
  }
}
