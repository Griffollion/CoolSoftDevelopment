// export function UsersSearchTemplate (node, text) {
//   const container = document.querySelector(node)
//   container.innerHTML =

export const UsersTemplate = document.createElement('template')

UsersTemplate.innerHTML = `
<div class="popup__users-template">    
<div class="overlay"></div>
      <div class="user-search">
      <div class="user-search__header">
          <div class="user-search__header--title">Участники</div>
          <div class="user-search__header--exit ">X</div>
      </div>
      <div class="user-search__list-wraper">
        <div class="user-search__title2">УЧАСТНИКИ ДОСКИ</div>
                
                  <div id="app"></div>
                  
              </div>
      </div>
      </div>
    </div>
          `;
