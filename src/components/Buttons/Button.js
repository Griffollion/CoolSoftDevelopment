import styles from "./Button.css"

export function Button (icon, node, text, callback, obj, data) {
  this.template = document.createElement('div')
  this.template.className = `button ${icon}`
  this.template.textContent = text
  this.render = function () {
    const container = document.querySelector(node)
    container.append(this.template)
  }
  this.template.onclick = () => {
    callback(obj, data)
  }
}
