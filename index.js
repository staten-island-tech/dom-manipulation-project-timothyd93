const DOMSelectors = {
  box: document.getElementById("container-box"),
  result: document.getElementById("result"),
  erase: document.getElementById("erase"),
  name: document.querySelector(`#name`),
  book: document.querySelector(`#book`),
  author: document.querySelector(`#author`),
  genre: document.querySelector(`#genre`),
};
const user = {
  name: DOMSelectors.name.value,
  book: DOMSelectors.book.value,
  author: DOMSelectors.author.value,
  genre: DOMSelectors.genre.value,
};
DOMSelectors.result.addEventListener("click", function () {
  let name = DOMSelectors.name.value;
  let book = DOMSelectors.book.value;
  let author = DOMSelectors.author.value;
  let genre = DOMSelectors.genre.value;
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<h1 id="yourname">Hello ${name}</h1> <p id ="yourinfo">Your favorite book is ${book}. Your favorite author is ${author}. Your favorite genre is ${genre}</p>`
  );
  DOMSelectors.name.value = "";
  DOMSelectors.book.value = "";
  DOMSelectors.author.value = "";
  DOMSelectors.genre.value = "";
});
DOMSelectors.erase.addEventListener("click", function () {
  document.getElementById("yourname").remove();
  document.getElementById("yourinfo").remove();
});
