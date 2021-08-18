export const MenuCardTemplate = document.createElement('template')
MenuCardTemplate.innerHTML = `
<div class = "wrapper_menu">
<div class="menu">
<div class="menu_header">
  <div class="menu_header-tittle">Очистить список</div>
  <div class="menu_header-close"></div>
</div>

  <ul class="menu_list">
    <li class="menu_list clrtodo"></li>
    <li class="menu_list clrinprcs"></li>
    <li class="menu_list clrdone"></li>
    <li class="menu_list clrall"></li>
  </ul>
</div>
</div>
`