const messageParagraph = document.getElementById("message");
const changeButton = document.getElementById("changeBtn");

function changeMessage() {
  messageParagraph.textContent = "Hello there!";
}

changeButton.addEventListener("click", changeMessage);