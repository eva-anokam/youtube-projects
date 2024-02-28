const allRates = document.querySelectorAll(".rate")
const ratingContainer = document.querySelector(".rating-number-container")
const submitBtn = document.querySelector("button")
const selectedRatingElement = document.querySelector(".selected-rating-element")
const rating = document.querySelector(".rating")
const thankYou = document.querySelector(".thank-you")
const errorElement = document.querySelector(".error")

let selectedRating;

function handleRatingClick(event) {
    const clickedRating = event.target;
    allRates.forEach(rate => rate.classList.remove("clicked-rate"))

    if (clickedRating.tagName === "DIV") {
        clickedRating.classList.add("clicked-rate");
        selectedRating = clickedRating.firstElementChild.textContent
    }
}

ratingContainer.addEventListener("click", handleRatingClick)

function hideElement(element) {
    element.style.display = "none"
}

function showElement(element) {
    element.style.display = "block"
}

function handleSubmit() {
    if (selectedRating) {
        hideElement(errorElement)
        selectedRatingElement.textContent = selectedRating
        hideElement(rating)
        showElement(thankYou)
    } else {
        showElement(errorElement)
    }
}

submitBtn.addEventListener("click", handleSubmit)