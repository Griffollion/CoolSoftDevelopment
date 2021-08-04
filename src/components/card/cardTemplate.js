import styles from './card'
import styles from '/src/components/buttons/button.css'



export const CardTemplate = document.createElement('template')
CardTemplate.innerHTML = `
<div class="card">
<div class="card__title">
  <div class="card__title-text">Готово</div>
  <div class="card__title-list">
    <input type="button" name = "button_card_title" value = '...' class="button button__small">
  </div>
</div>
<div class="card__card"></div>
<div class="card__footer">
  <div class="card__footer-button">
  <input type="button" name = "button_card_footer" value = '+ Добавить карточку' class="button">
  </div>
</div>
</div>
`