export const LimitCardTemplate = document.createElement('template')
LimitCardTemplate.innerHTML = `
<div class = "wrapper_limitCard">
<div class = "limitCard"> 
<div class = "limitCard__title"> Предупреждение </div>
<div class = "limitCard__notice"> В списке in_progress может быть <br> не более 6 задач </div>
<div class = "limitCard__footer">
<div class = "limitCard__footer_button close"></div>
</div>
</div>
</div>
`