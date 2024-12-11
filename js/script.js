// DOM ELEMENTS

// Fields

const fullNameFieldElm = document.getElementById("full-name-field")
const distanceFieldElm = document.getElementById("distance-field")
const ageSelectorElm = document.getElementById("age-selector")

// console.log(typeof distanceFieldElm)

// Placeholder ticket

const namePassengerElm = document.getElementById("namePassenger")
const discountForAgeElm = document.getElementById("discount")
const randomSeatElm = document.getElementById("seat")
const randomCpCodeElm = document.getElementById("cp-code")
const ticketPriceElm = document.getElementById("ticket-price")

// Forms

const formElm = document.getElementById("form-ticket")
const btnReset = document.getElementById("btn-reset")

// Ticket 

const sectionTicketElm = document.getElementById("section-ticket")

// FUNCTIONS
/**
 * Generate a random number between a min and a max
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @returns {number}
 */

function getRandomNumber(min, max) {
    let randomNumber = (Math.floor((Math.random()) * (max - min + 1) + min))
    return randomNumber
    }

// LOGIC

formElm.addEventListener("submit", function(event) {
    event.preventDefault()
    // Variables ticket price to age 
    const distanceNumber = Number(distanceFieldElm.value)
    const ticketPrice = (0.21 * distanceNumber).toFixed(2)
    const ticketPriceUnderage = (ticketPrice - ticketPrice / 100 * 20).toFixed(2)
    const ticketPriceOver65 = (ticketPrice - ticketPrice / 100 * 40).toFixed(2);

    // Inserimento dati
    namePassengerElm.innerHTML = fullNameFieldElm.value
    discountForAgeElm.innerHTML = ageSelectorElm.value
    randomSeatElm.innerHTML = getRandomNumber(1, 10)
    randomCpCodeElm.innerHTML = getRandomNumber(90000, 100000)
    if (ageSelectorElm.value === "Maggiorenne") {
        ticketPriceElm.innerHTML = ticketPrice + "€"
        console.log(fullNameFieldElm.value, ageSelectorElm.value, randomSeatElm.innerHTML, randomCpCodeElm.innerHTML, ticketPrice + "€")
    } else if (ageSelectorElm.value === "Minorenne") {
        ticketPriceElm.innerHTML = ticketPriceUnderage + "€"
        console.log(fullNameFieldElm.value, ageSelectorElm.value, randomSeatElm.innerHTML, randomCpCodeElm.innerHTML, ticketPriceUnderage + "€")
    } else if (ageSelectorElm.value === "Over 65") {
        ticketPriceElm.innerHTML = ticketPriceOver65 + "€"
        console.log(fullNameFieldElm.value, ageSelectorElm.value, randomSeatElm.innerHTML, randomCpCodeElm.innerHTML, ticketPriceOver65 + "€")
    }
    sectionTicketElm.classList.remove("d-none")
})

btnReset.addEventListener("click", function(event) {
    sectionTicketElm.classList.add("d-none")
})
