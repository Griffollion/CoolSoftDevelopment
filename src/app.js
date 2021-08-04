import styles from './css/styles.css'
import { Button } from './components/buttons/button'
import { NewCard } from './components/NewCard/NewCard'
import { Data } from './components/Data/Data'

const newCard = new NewCard('.container-global')
newCard.render()

const usersButton = new Button('icn__btnuser', '.user', 'Участники')
usersButton.render()
const dateButton = new Button('icn__btnaccess_time', '.data', 'Дата')
dateButton.render()
const movButton = new Button('icn__btnarrow-right2', '.moving', 'Перемещение')
movButton.render()
const copyButton = new Button('icn__btncontent_copy', '.copying', 'Копирование')
copyButton.render()
const delButton = new Button('icn__btnvideo_label', '.archiving', 'Архивация')
delButton.render()
const showButton = new Button('', '.card-info__actions-btn', 'Показать подробности')
showButton.render()
const changeButton = new Button('', '.card-info__description-btn', 'Изменить')
changeButton.render()

const inputData = new Data('.container-term-btn__data')
inputData.render()
