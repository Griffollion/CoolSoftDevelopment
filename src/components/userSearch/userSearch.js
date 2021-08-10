



function renderUser (obj) {
  return (`<div class="user-search__form--user-list">
          <div class="user-list__avatar">
            <div class="user-list__initial">
            ${obj.name.split(' ').map(function (item) { return item[0] }).join('')}
            </div>
          </div>
          <div class="user-list--ticker">
          <div class="user-list__name">
              ${obj.name} (${obj.username})
          </div>
          </div>
          
      </div>`)
}

export async function getDataFromServer () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  data.forEach(function (el) {
    const userListPlace = document.querySelector('#app')
    userListPlace.insertAdjacentHTML('beforeend', renderUser(el))
  })
}
