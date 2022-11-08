const navEl = document.querySelectorAll("li.item");
const navNumbersEl = navEl.length;
console.log("Number of categories:", navNumbersEl);
const navNumberEL = navEl[0].firstElementChild;
console.log("Category:", navNumberEL.textContent);

const navElement = document.querySelectorAll("ul");
const navElements = navElement.length;
console.log("Elements:", navElements);

const navNumberELs = navEl[1].firstElementChild;
console.log("Category:", navNumberELs.textContent);

const navEls = navElement[2].children;
console.log("Elements:", navEls.length);

const navNumberELement = navEl[2].firstElementChild;
console.log("Category:", navNumberELement.textContent);

const navE = navElement[3].children;
console.log("Elements:", navE.length);
