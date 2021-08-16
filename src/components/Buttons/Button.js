import styles from "./Button.css"

export function Button (icon, node, text, doAction) {
  this.template = document.createElement('div')
  this.template.className = `button ${icon}`
  this.template.textContent = text
  this.render = function () {
    const container = document.querySelector(node)
    container.append(this.template)
  }
  this.template.onclick = () => {
    doAction(arguments[4], arguments[5], arguments[6], arguments[7])
  }
}
