import styles from "./NewCard.css"
import { NewCardTemplate } from "./NewCardTemplate"

export function NewCard (node, obj) {
  this.component = NewCardTemplate.content.querySelector('div').cloneNode(true)
  // if (obj.data) {
  //   this.component.querySelector('.myDate').innerHTML = obj.data
  // }
  if (obj.description) {
    this.component.querySelector('.textarea-description').innerHTML = obj.description
  }
  if (obj.comment) {
    this.component.querySelector('.textarea-actions').innerHTML = obj.comment
  }
  this.component.querySelector('.new__card-header-name').innerHTML = obj.title
  this.render = function () {
    const body = document.querySelector(node)
    body.append(this.component)
  }
}
