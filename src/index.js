/**
 * Catching interface's elements
 */
const header = document.querySelector('.header-container')
const allElements = [...document.querySelectorAll('[id]')]
let elements = {}
allElements.forEach(element => elements[element.id] = element)

window.addEventListener('scroll', () => {
    let value = window.scrollY
    elements.stars.style.left = value * 0.25 + 'px'
    elements.moon.style.top = value * 1.05 + 'px'
    elements.mountains_behind.style.top = value * 0.5 + 'px'
    elements.title.style.marginRight = value * 4 + 'px'
    elements.title.style.marginTop = value * 1.5 + 'px'
    elements.button.style.marginTop = value * 1.5 + 'px'
    header.style.marginTop = value * 0.5 + 'px'
})