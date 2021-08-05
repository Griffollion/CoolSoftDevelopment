import styles from './css/styles.css'
import { Button } from './components/buttons/button'
import { UsersSearchTemplate } from './components/userSearch/userSearchTemplate'
import { getDataFromComputer } from './components/userSearch/userSearch'

// const button = new Button('.container-global','название кнопки')
// button.render()

UsersSearchTemplate('.users-template', 'users-searc-template')
getDataFromComputer()
