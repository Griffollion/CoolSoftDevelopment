import styles from "./MenuCard.css"
import { MenuCardTemplate } from "./MenuCardTemplate"

export function MenuCard() {
    this.component = MenuCardTemplate.content.querySelector('div').cloneNode(true)
    this.render = function() {
        const body = document.querySelector(".main")
        body.append(this.component)
    }
}