/**
 * Catching interface's elements
 */
let allElements = [...document.querySelectorAll('[id]')]
let elements = {}
allElements.forEach(element => elements[element.id] = element)