export const DataCardTemplate = document.createElement('template')
DataCardTemplate.innerHTML = `
        <div class="date__card-wrapper">
        <div class="date__card" >
            <div class="date__card-header">
                <div class="card__header-name">
                    Даты
                </div>
                <div class="card__header-close">
                    x
                </div>
            </div>
            <div class="data__card-input">
            <input class="input__date" type="date">
            </div>
        </div>
        </div>
`
