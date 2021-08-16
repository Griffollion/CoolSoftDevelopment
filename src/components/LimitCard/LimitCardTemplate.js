export const LimitCardTemplate = document.createElement('template')
LimitCardTemplate.innerHTML = `
<div class = "limitCard"> 
<div class = "limitCard__title"> Предупреждение </div>
<div class = "limitCard__notice"> В списке in_progress может быть не больше 6 задач </div>
<div class = "limitCard__footer">
<div class = "limitCard__footer_button close"></div>
</div>
</div>
`