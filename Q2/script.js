const userInputField = document.getElementById("userInput");
const checkButton = document.getElementById("checkBtn");
const resultParagraph = document.getElementById("result");

function checkInput() {
  const rawValue = userInputField.value.trim();

  if (rawValue === "") {
    resultParagraph.textContent = "Please enter a valid number!";
    return;
  }

  const numericValue = Number(rawValue);

  if (Number.isNaN(numericValue)) {
    resultParagraph.textContent = "Please enter a valid number!";
  } else if (numericValue < 10) {
    resultParagraph.textContent = "The number is lower than 10";
  } else if (numericValue > 10) {
    resultParagraph.textContent = "The number is higher than 10";
  } else {
    resultParagraph.textContent = "The number is equal to 10";
  }
}

checkButton.addEventListener("click", checkInput);