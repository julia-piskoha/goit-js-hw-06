const button = document.querySelector("button.change-color");
const span = document.querySelector("span.color");
const body = document.querySelector("body");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener("click", (event) => {
  body.style.backgroundColor = getRandomHexColor();
  return console.log((span.textContent = body.style.backgroundColor));
});
