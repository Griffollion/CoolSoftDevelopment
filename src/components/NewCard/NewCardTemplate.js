export const NewCardTemplate = document.createElement('template')
NewCardTemplate.innerHTML = `
<div class="new__card">
        <div class="new__card-header">
            <div class="new__card-header-right">
                <div class="new__card-header-name"><span></span>Наименование новой карты</div>
                <div class="new__card-header-ststus">колонка нахождения
                    <span class="new__card-header-ststus-span">статус</span>
                    <span></span>
                </div>
            </div>
            <div class="new__card-header-left">
                <div class="new__card-header-close"><span></span></div>
            </div>
        </div>
        <div class="new__card-wrapper">
            <div class="new__card-info">
                <div class="card-info__container">
                    <div class="card-info__container-users">
                        <div class="card-info__container-users-title">УЧАСТНИКИ</div>
                        <div class="card-info__container-users-icons"><span></span></div>
                    </div>
                    <div class="card-info__container-term">
                        <div class="card-info__container-term-title">СРОК</div>
                        <div class="card-info__container-term-wrapper">
                            <div class="card-info__container-term-input"><input type="checkbox"></div>
                            <div class="card-info__container-term-btn">
                                <span class="container-term-btn__data">cрок исполнения</span>
                                <span class="container-term-btn__status">статус</span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-info__description">
                    <div class="card-info__description-wrapper">
                        <div class="card-info__description-title">
                            <span></span>
                            Описание
                        </div>
                        <div class="card-info__description-btn button">Изменить</div>
                    </div>
                    <div class="card-info__description-text">
                        <textarea class="textarea-description" placeholder="Введите отписание задачи!"></textarea>
                    </div>
                </div>
                <div class="card-info__actions">
                    <div class="card-info__actions-wrapper">
                        <div class="card-info__actions-title">
                            <span></span>
                            Действия
                        </div>
                        <div class="card-info__actions-btn button">Показать подробности</div>
                    </div>
                    <div class="card-info__actions-text">
                        <textarea class="textarea-actions" placeholder="Напишите коментарий..."></textarea>
                    </div>
                </div>
            </div>
            <div class="new__card-create">
                <div class="new__card-create-wrapper">
                    <ul class="card-create">
                        <div class="card-create__title">ДОБАВИТЬ НА КАРТОЧКУ</div>
                        <li class="card-create__button button"><span></span>Участники</li>
                        <li class="card-create__button button"><span></span>Метки</li>
                        <li class="card-create__button button"><span></span>Чек-лист</li>
                        <li class="card-create__button button"><span></span>Даты</li>
                        <li class="card-create__button button"><span></span>Вложение</li>
                        <li class="card-create__button button"><span></span>Обложка</li>
                    </ul>
                    <div class="card-create">
                        <div class="card-create__title">УЛУЧШЕНИЯ</div>
                        <div class="card-create__button button__white button"><span></span>Добавить улучшения</div>
                    </div>
                    <div class="card-create">
                        <div class="card-create__title">АВТОМАТИЗАЦИЯ</div>
                        <div class="card-create__button button__white button"><span></span>Добавить кнопку</div>
                    </div>
                    <ul class="card-create">
                        <div class="card-create__title">ДЕЙСТВИЯ</div>
                        <li class="card-create__button button"><span></span>Перемещение</li>
                        <li class="card-create__button button"><span></span>Копирование</li>
                        <li class="card-create__button button"><span></span>Создать шаблон</li>
                        <li class="card-create__button button"><span></span>Подписаться</li>
                        <li class="card-create__button button"><span></span>Архивация</li>
                        <li class="card-create__button button"><span></span>Поделиться</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
`
