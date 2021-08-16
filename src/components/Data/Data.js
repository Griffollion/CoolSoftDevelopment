import styles from './Data.css'

export function Data (node, obj) {
    this.template = document.createElement('input')
    if (obj.data) {
      this.template.value = obj.data
    }
    this.template.type = type="date"
    this.template.className = `myDate user-content`
       this.render = function () {
      const container = document.querySelector(node)
      container.append(this.template)
    }
    // this.template.onclick = function () {
    //  }
  }