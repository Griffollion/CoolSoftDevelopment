import styles from './css/styles.css'
import { Button } from './components/buttons/button'
import { NewCard } from './components/NewCard/NewCard'

const newCard = new NewCard()
newCard.render()

function buttonCreator (icon, className, name) {
  const button = new Button(icon, className, name)
  button.render()
}
buttonCreator('icn__btnuser', '.user', 'Участники')
buttonCreator('icn__btnaccess_time', '.data', 'Дата')
buttonCreator('icn__btnarrow-right2', '.moving', 'Перемещение')
buttonCreator('icn__btncontent_copy', '.copying', 'Копирование')
buttonCreator('icn__btnvideo_label', '.archiving', 'Архивация')
buttonCreator('', '.card-info__actions-btn', 'Показать подробности')
buttonCreator('', '.card-info__description-btn', 'Изменить')
