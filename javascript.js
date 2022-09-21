const first_name = document.querySelector("#first_name")
const submitButton = document.querySelector(".submit")
const greetingOutput = document.querySelector(".greeting")

function updateGreetingOutput() {
    greetingOutput.textContent = `Hello ${first_name.value}!`; 
}

submitButton.addEventListener("click", updateGreetingOutput)