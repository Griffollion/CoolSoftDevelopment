import styles from './css/styles.css'
import { Button } from './components/buttons/button'
import { createCard } from './components/card/card'


// const button = new Button('.container-global','название кнопки')
// button.render()
const card = new createCard ()
card.render('.container-global')