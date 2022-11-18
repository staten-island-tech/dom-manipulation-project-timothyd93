const DOMSelectors = {
  box: document.getElementById("container-box"),
  result: document.getElementById("result"),
  name: document.querySelector(`#name`),
  book: document.querySelector(`#book`),
  author: document.querySelector(`#author`),
  genre: document.querySelector(`#genre`),
};

DOMSelectors.result.addEventListener("click", function () {
  insertHTML();
  clearInputs();
  removeButton();
});
function insertHTML() {
  const info = {
    name: DOMSelectors.name.value,
    book: DOMSelectors.book.value,
    author: DOMSelectors.author.value,
    genre: DOMSelectors.genre.value,
  };
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div><h1 id ="infoname"> Hello ${info.name}</h1> <p id ="yourinfo">Your favorite book is ${info.book}. Your favorite author is ${info.author}. Your favorite genre is ${info.genre}.</p> <button id="removebtn">Remove</button></div>`
  );
}

function clearInputs() {
  DOMSelectors.name.value = "";
  DOMSelectors.book.value = "";
  DOMSelectors.author.value = "";
  DOMSelectors.genre.value = "";
}

function removeButton() {
  const buttons = document.querySelectorAll(`#removebtn`);
  const buttonsArray = Array.from(buttons);
  buttonsArray.forEach((button) =>
    button.addEventListener("click", function () {
      this.parentElement.remove();
    })
  );
}
