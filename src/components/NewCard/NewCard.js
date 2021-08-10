import styles from "./NewCard.css"
import { NewCardTemplate } from './NewCardTemplate'

export function NewCard (node, obj) {
  this.component = NewCardTemplate.content.querySelector('div').cloneNode(true)
  this.component.querySelector('.new__card-header-name').innerHTML = obj.title
  this.render = function () {
    const body = document.querySelector(node)
    body.append(this.component)
  }
}
