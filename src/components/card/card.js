import styles from './card.css'
import styles from './src/components/buttons/button.css'

import { CardTemplate } from './cardTemplate'

export function createCard () {
  this.component = CardTemplate.content.querySelector('div').cloneNode(true)
  this.render = function (node) {
    const container = document.querySelector(node)
    container.append(this.component)
  }
}