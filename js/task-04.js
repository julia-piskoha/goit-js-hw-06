const value = document.querySelector("#value");
const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
    console.log("increment -> this", this);
  },
  decrement() {
    console.log("decrement -> this", this);
    this.counterValue -= 1;
  },
};
const btnEventListener = document.querySelector("[data-action='decrement']");
const btnRemoveListener = document.querySelector("[data-action='increment']");

btnEventListener.addEventListener("click", () => {
  counter.decrement();
  console.log(counter);
  value.textContent = counter.counterValue;
});
btnRemoveListener.addEventListener("click", () => {
  counter.increment();
  console.log(counter);
  value.textContent = counter.counterValue;
});
