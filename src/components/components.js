export function addArea () {
  const input = document.createElement('div')
  input.innerHTML = `<textarea class="card_task"></textarea>`
  const container = document.querySelector('.textarea')
  return container.append(input)
}

export function addTask (tag) {
  tag.className = 'task in_done'
  const container = document.querySelector('.card_list-tasks')
  const inputCreatorCard = document.querySelector('.new__card-header-name')
  inputCreatorCard.append(tag.innerHTML)
  return container.append(tag)
}

export function saveDataValue (box, item, key) {
  const container = document.querySelector(box)
  container.addEventListener('change', () => {
    localStorage.setItem(key, item.template.value)
  })
}

export function saveInputValue (box, item, key) {
  const container = document.querySelector(box)
  container.addEventListener('change', () => {
    localStorage.setItem(key, item.value)
  })
}