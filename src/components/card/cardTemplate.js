
export const CardTemplate = document.createElement('template')

CardTemplate.innerHTML = `
<div class="card">
<div class="card__title">
  <div class="card__title-text"></div>
</div>
<div class="card_list">
  <div class="card_list-tasks"></div>
  <input type="text" name="card-task" class="card_task" />
</div>
  <div class="card__button">
    <button name="btn-card" class="btn-card">+ добавить карточку</button>
  </div>
</div>
        `