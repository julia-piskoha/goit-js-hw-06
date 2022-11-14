const input = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");
input.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}
