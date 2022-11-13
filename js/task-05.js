const form = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

form.addEventListener("input", (event) => {
  if (form.value === "") {
    return console.log((output.textContent = "Anonymous"));
  } else {
    console.log((output.textContent = event.currentTarget.value));
  }
});
