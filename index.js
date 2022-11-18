const DOMSelectors = {
  box: document.getElementById("container-box"),
  result: document.getElementById("result"),
  name: document.querySelector(`#name`),
  book: document.querySelector(`#book`),
  author: document.querySelector(`#author`),
  genre: document.querySelector(`#genre`),
};

DOMSelectors.result.addEventListener("click", function () {
  adjacentHTML();
  clearInputs();
  removeButton();
});
function adjacentHTML() {
  const info = {
    name: DOMSelectors.name.value,
    book: DOMSelectors.book.value,
    author: DOMSelectors.author.value,
    genre: DOMSelectors.genre.value,
  };
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<h1 id ="infoname"> Hello ${info.name}</h1> <p id ="yourinfo">Your favorite book is ${info.book}. Your favorite author is ${info.author}. Your favorite genre is ${info.genre}</p> <button id="removebtn">Remove</button>`
  );
}

function clearInputs() {
  DOMSelectors.name.value = "";
  DOMSelectors.book.value = "";
  DOMSelectors.author.value = "";
  DOMSelectors.genre.value = "";
}

// function removeButton() {
//   DOMSelectors.remove = document.getElementById("remove");
//   DOMSelectors.remove.addEventListener("click", function () {
//     document.getElementById("infoname").remove();
//     document.getElementById("yourinfo").remove();
//     document.getElementById("remove").remove();
//   });
// }
function removeButton() {
  const buttons = document.querySelectorAll(`#removebtn`);
  const buttonsArray = Array.from(buttons);
  buttonsArray.forEach((button) =>
    button.addEventListener("click", function () {}, alert("imhere"))
  );
}
