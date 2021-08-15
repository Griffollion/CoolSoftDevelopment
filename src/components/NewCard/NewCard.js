import styles from "./NewCard.css"
import { NewCardTemplate } from "./NewCardTemplate"

export function NewCard (obj) {
  this.component = NewCardTemplate.content.querySelector('div').cloneNode(true)
  if (obj.description) {
    this.component.querySelector('.textarea-description').innerHTML = obj.description
  }
  if (obj.comment) {
    this.component.querySelector('.textarea-actions').innerHTML = obj.comment
  }
  if (obj.position) {
    this.component.querySelector('.new__card-header-ststus-span').innerHTML = obj.position
  }
  if (obj.title) {
    this.component.querySelector('.new__card-header-name').innerHTML = obj.title
  }
  this.render = function () {
    const body = document.querySelector(".container-global")
    body.append(this.component)
  }
}
