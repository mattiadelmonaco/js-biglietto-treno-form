// DOM ELEMENTS
// Fields
const fullNameFieldElm = document.getElementById("full-name-field")
const distanceFieldElm = document.getElementById("distance-field")
const ageSelectorElm = document.getElementById("age-selector")
// Forms
const formElm = document.getElementById("form")

// console.log(fullNameFieldElm, distanceFieldElm, ageSelectorElm, formElm)

formElm.addEventListener("submit", function(event) {
    event.preventDefault()
})