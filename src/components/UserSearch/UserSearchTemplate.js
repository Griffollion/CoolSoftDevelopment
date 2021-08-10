import styles from './UserSearch.css'

export function UsersSearchTemplate (node, text) {
  const container = document.querySelector(node)
  container.innerHTML = `
      <div class="user-search">
      <div class="user-search__header">
          <div class="user-search__header--title">Участники</div>
          <a href="#header" class="popup__close user-search__header--exit">X</a>
      </div>
      <div class="user-search__list-wraper">
        <div class="user-search__title2">УЧАСТНИКИ ДОСКИ</div>
                
                  <div id="app"></div>
                  
              </div>
      </div>
      </div>`
}
