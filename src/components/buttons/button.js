import styles from './button.css'

export function Button (icon, node, text, doAction) {
  this.template = document.createElement('div')
  this.template.className = `button ${icon}`
  this.template.textContent = text
  this.template.value = ''
  this.render = function () {
    const container = document.querySelector(node)
    container.append(this.template)
  }
  this.template.onclick = () => {
    doAction()
   }
}
