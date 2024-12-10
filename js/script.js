// DOM ELEMENTS

// Fields

const fullNameFieldElm = document.getElementById("full-name-field")
const distanceFieldElm = document.getElementById("distance-field")
const ageSelectorElm = document.getElementById("age-selector")

// Placeholder ticket

const namePassenger = document.getElementById("namePassenger")
const discountForAge = document.getElementById("discount")
const randomSeat = document.getElementById("seat")
const randomCpCode = document.getElementById("cp-code")
const ticketPrice = document.getElementById("ticket-price")

// Forms

const formElm = document.getElementById("form")

// console.log(fullNameFieldElm, distanceFieldElm, ageSelectorElm, formElm)

// LOGIC

formElm.addEventListener("submit", function(event) {
    event.preventDefault()

    // Inserimento dati
    namePassenger.innerHTML = fullNameFieldElm.value
    discountForAge.innerHTML = ageSelectorElm.value
})

