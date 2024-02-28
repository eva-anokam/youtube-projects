const allRates = document.querySelectorAll(".rate");
const ratingContainer = document.querySelector(".rating-container");

const submitBtn = document.querySelector("button");
const selectedRatingElement = document.querySelector(".selected-rating-element");
const rating = document.querySelector(".rating");
const error = document.querySelector(".error");
const thankYouCard = document.querySelector(".thank-you");

let selectedRating;

ratingContainer.addEventListener("click", handleRatingClick);

function handleRatingClick(event) {
    const clickedRating = event.target;
    allRates.forEach(rate => rate.classList.remove("clicked-rate"));

    if (clickedRating.tagName === 'DIV') {
        clickedRating.classList.add("clicked-rate");
        selectedRating = clickedRating.firstElementChild.textContent;
    }
}

submitBtn.addEventListener("click", handleSubmit);

function handleSubmit() {
    if (selectedRating) {
        hideElement(error);
        selectedRatingElement.textContent = selectedRating;
        hideElement(rating);
        showElement(thankYouCard);
    } else {
        showElement(error);
    }
}

function hideElement(element) {
    element.style.display = "none";
}

function showElement(element) {
    element.style.display = "block";
}
