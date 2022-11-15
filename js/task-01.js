const navEl = document.querySelectorAll("li.item");
const navNumbersEl = navEl.length;
console.log("Number of categories:", navEl.length);
navEl.forEach(getCategoriesEl);
function getCategoriesEl(category) {
  const categoryTitleEl = category.firstElementChild;
  console.log("Category:", categoryTitleEl.textContent);
  const categoryList = categoryTitleEl.nextElementSibling;
  console.log("Elements:", categoryList.childElementCount);
}
