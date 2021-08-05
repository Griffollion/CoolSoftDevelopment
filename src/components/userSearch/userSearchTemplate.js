import styles from './userSearch.css'


export function UsersSearchTemplate (node, text) {
  const container = document.querySelector(node)
  container.innerHTML = `
      <div class="user-search">
      <div class="user-search__header">
          <div class="user-search__header--title">Участники</div>
          <a href="#header" class="popup__close user-search__header--exit">X</a>
      </div>
      <form action="" class="user-search__form">
          <input type="text" placeholder="Поиск Участников" class="user-search__input">
              <div class="user-search__title2">УЧАСТНИКИ ДОСКИ</div>
                
                  <div id="app"></div>
                  
              </div>
      </form>
      </div>`
}
