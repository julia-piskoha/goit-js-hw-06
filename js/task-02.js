const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");
const makeIngredientsList = (ingredient) => {
  return ingredients.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;
    itemEl.classList.add("item");

    return itemEl;
  });
};
const elements = makeIngredientsList(ingredients);
console.log(elements);
listEl.append(...elements);
