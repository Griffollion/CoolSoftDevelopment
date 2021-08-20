export const EventCardTemplate = document.createElement('template')
EventCardTemplate.innerHTML = `
<div class = "wrapper_eventCard">
  <div class = "eventCard"> 
    <div class = "eventCard__title"></div>
    <div class = "eventCard__text"></div>
    <div class = "eventCard__footer">
      <div class = "eventCard__footer_button cancel"></div>
      <div class = "eventCard__footer_button event"></div>
    </div>
</div>
</div>`