export function addTask(){
    const input = document.createElement('div')
        input.innerHTML=`
        <textarea type="text" name="card-task" class="card_task"></textarea> 
        `
        let container = document.querySelector('.card_list-tasks')
        return container.append(input)
}