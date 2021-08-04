import styles from './css/styles.css'
import { Button } from './components/buttons/button'
import { createCard } from './components/card/card'


const cardToDo = new createCard ("todo")
cardToDo.render('.container-cards')

const cardInProgress = new createCard ("in progress")
cardInProgress.render('.container-cards')

const cardDone = new createCard ("done")
cardDone.render('.container-cards')