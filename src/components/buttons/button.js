import styles from './button.css'

export function Button (text) {
  this.template = document.createElement('div')
  this.template.className = 'button'
  this.template.textContent = text
  this.render = function () {
    const container = document.body
    container.append(this.template)
    
  }
  
  // this.template.onclick = function () {
  //  }
}

