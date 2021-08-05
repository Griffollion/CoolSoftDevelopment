import data from '../data/users.json'

function renderUser (obj) {
  return (`<div class="user-search__form--user-list">
          <img src="${obj.avatar}" class="user-list__avatar">
          <div class="user-list--ticker">
          <div class="user-list__name">
              ${obj.firstName} ${obj.secondName} (${obj.nickName})
          </div>
          </div>
          
      </div>`)
}

export function getDataFromComputer () {
  // const response = await fetch('../data/users.json')
  // console.log(response)
  // const data = await response.json()
  data.forEach(function (el) {
    const userListPlace = document.querySelector('#app')
    userListPlace.insertAdjacentHTML('beforeend', renderUser(el))
  })
}
