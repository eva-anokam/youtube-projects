const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password");
const form = document.querySelector("form")

//email regular expression
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateText(input) {
    const isValid = input.value.trim() !== "";
    input.classList.toggle("invalid", !isValid)
    return isValid
}

function validateEmail(input) {
    const isValid = input.value.match(emailFormat)
    input.classList.toggle("invalid", !isValid)
    return isValid
}

function validateForm() {
    const isFirstNameValid = validateText(firstNameInput)
    const islastNameValid = validateText(lastNameInput)
    const isEmailValid = validateEmail(emailInput)
    const isPasswordValid = validateText(passwordInput)

    return isFirstNameValid && islastNameValid && isEmailValid && isPasswordValid
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isFormValid = validateForm()
    if (isFormValid) {
        alert("Form submitted successfully!")
    }
})