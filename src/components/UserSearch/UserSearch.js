import styles from './UserSearch.css'
import { UsersTemplate } from './UserSearchTemplate'


export function CreateUsersTemplate (node, obj) {
  this.component = UsersTemplate.content.querySelector('div').cloneNode(true)
  this.render = function () {
    const body = document.querySelector(node)
    body.append(this.component)
  }
}

function renderUser (obj) {
  return (`<div class="user-search__form--user-list">
          <div class="user-list__avatar">
            <div class="user-list__initial">
            ${obj.name.split(' ').map(function (item) { return item[0] }).join('')}
            </div>
          </div>
          <div class="user-list--ticker">
          <div class="user-list__name">
              ${obj.name}
          </div>
          </div>
          </div>`)
}

export async function GetDataFromServer () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  data.forEach(function (el) {
    const userListPlace = document.querySelector('#app')
    userListPlace.insertAdjacentHTML('beforeend', renderUser(el))
  })
}

export function ToCloseModalUsersTemplate () {
  document.querySelector('.popup__users-template').remove()
}
