const DOMSelectors = {
  box: document.getElementById("container-box"),
  result: document.getElementById("result"),
  erase: document.getElementById("erase"),
  remove: document.getElementById("remove"),
  print: document.querySelector(`#print`),
  name: document.querySelector(`#name`),
  genre: document.querySelector(`#genre`),
  book: document.querySelector(`#book`),
  author: document.querySelector(`#author`),
};

DOMSelectors.result.addEventListener("click", function () {
  let name = DOMSelectors.name.value;
  let book = DOMSelectors.book.value;
  let genre = DOMSelectors.genre.value;
  let author = DOMSelectors.author.value;
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p id="print">Your name is ${name}. Your favorite book is ${book}. Your favorite genre is ${genre}. Your favorite author is ${author}</p>`
  );
  DOMSelectors.name.value = "";
  DOMSelectors.book.value = "";
  DOMSelectors.genre.value = "";
  DOMSelectors.author.value = "";
});
DOMSelectors.remove.addEventListener("click", function () {
  document.getElementById("print").remove();
});
