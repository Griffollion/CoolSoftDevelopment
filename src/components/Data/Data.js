import styles from './Data.css'

export function Data (node) {
    this.template = document.createElement('input')
    this.template.value = ''
    this.template.type = type="date"
    this.template.className = `myDate`
    this.render = function () {
      const container = document.querySelector(node)
      container.append(this.template)
    }
    // this.template.onclick = function () {
    //  }
  }