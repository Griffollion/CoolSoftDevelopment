import styles from "./DataCard.css"
import { DataCardTemplate } from "./DataCardTemplate"

export function DataCard (node) {
  this.component = DataCardTemplate.content.querySelector('div').cloneNode(true)
  this.component.querySelector('.input__date').value = document.querySelector('.myDate').value
  this.render = function () {
    const body = document.querySelector(node)
    body.append(this.component)
  }
}

export function closeDataCard () {
    document.querySelector('.date__card-wrapper').remove()
  }

export function getInputDataValue () {
  const inputValue = document.querySelector('.input__date')
  const inputCardValue = document.querySelector('.myDate')
  inputValue.addEventListener('change', () => {
    inputCardValue.value = inputValue.value
    console.log(inputCardValue.value)
  })
}
