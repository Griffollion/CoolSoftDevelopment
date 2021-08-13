export const NewCardTemplate = document.createElement('template')
NewCardTemplate.innerHTML = `
<div class="new__card">
        <div class="new__card-header">
            <div class="new__card-header-right">
                <textarea class="new__card-header-name">Наименование новой карты</textarea>
                <div class="new__card-header-ststus">колонка нахождения
                    <span class="new__card-header-ststus-span">статус</span>
                    <span class="icn__btneye"></span>
                </div>
            </div>
            <div class="new__card-header-left close">
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
                                <span class="container-term-btn__data"></span>
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
                            Описание задачи
                        </div>
                        <div class="card-info__description-btn"></div>
                    </div>
                    <div class="card-info__description-text">
                        <textarea class="textarea-description" placeholder="Введите отписание задачи!"></textarea>
                    </div>
                </div>
                <div class="card-info__actions">
                    <div class="card-info__actions-wrapper">
                        <div class="card-info__actions-title">
                            <span></span>
                            Коментарий
                        </div>
                        <div class="card-info__actions-btn"></div>
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
                        <li class="card-create__button user"></li>
                        <li class="card-create__button data"></li>
                    </ul>
                    <ul class="card-create">
                        <div class="card-create__title">ДЕЙСТВИЯ</div>
                        <li class="card-create__button moving"></li>
                        <li class="card-create__button archiving"></li>
                    </ul>
                    <ul class="card-create">
                    <li class="card-create__button save"></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
`
