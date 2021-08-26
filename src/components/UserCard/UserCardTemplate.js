export const UserCardTemplate = document.createElement('template')
UserCardTemplate.innerHTML = `
<div class = 'usercard'>
    <div class = 'usercard__header'>
        <div class = 'usercard__header-username'></div>
        <div class = 'usercard__header-close'>X</div>
    </div>
    <div class = 'usercard__info'>
        <div class = 'usercard__info-email'></div>
        <div class = 'usercard__info-phone'></div>
        <div class = 'usercard__info-website'></div>
    </div>
    <div class = 'usercard__button'></div>
</div>
`