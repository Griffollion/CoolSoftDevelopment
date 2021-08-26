export const UsersTemplate = document.createElement("template");

UsersTemplate.innerHTML = `
  <div class="popup__users-template">
    <div class="overlay">
      <div class="user-search">
        <div class="user-search__header">
          <div class="user-search__header--title">Участники</div>
          <div class="user-search__header--exit">X</div>
        </div>
        <div class="user-search__list-wraper">
          <div class="user-search__title2"></div>
          <div id="app"></div>
        </div>
      </div>
     </div> 
  </div>
          `;
export const UserTemplate = document.createElement("template")

UserTemplate.innerHTML = `
      <div class="user-search__form--user-list">
          <div class="user-list__avatar">
            <div class="user-list__initial"></div>
          </div>
          <div class="user-list--ticker">
            <div class="user-list__name"></div>
          </div>
        </div>
`