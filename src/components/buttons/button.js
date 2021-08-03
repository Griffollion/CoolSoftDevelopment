import styles from './button.css'

export function Button (node, text) {
  this.template = document.createElement('div')
  this.template.className = 'button'
  this.template.textContent = text
  this.render = function () {
    const container = document.querySelector(node)
    container.append(this.template)
    
  }
  
  // this.template.onclick = function () {
  //  }
}

