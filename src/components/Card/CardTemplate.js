export const CardTemplate = document.createElement("template");


CardTemplate.innerHTML = `
<div class="card">
<div class="card__title">
  <div class="card__title-text"></div>
</div>
<div class="card_list">
  <div class="card_list-tasks">
  <div class="card-task"></div>
  </div>
  <div class="textarea"></div>
</div>
  <div class="card__button">
  </div>
</div>
        `;
