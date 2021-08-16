export function Menu() {
    this.template = document.createElement('div')
    this.template.className = "icon-users"
    this.render = function() {
        const container = document.querySelector(".header")
        container.append(this.template)
    }
}