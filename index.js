const DOMSelectors = {
  box: document.getElementById("container-box"),
  result: document.getElementById("result"),
  erase: document.getElementById("erase"),
  name: document.querySelector(`#name`),
  book: document.querySelector(`#book`),
  author: document.querySelector(`#author`),
  genre: document.querySelector(`#genre`),
};

DOMSelectors.result.addEventListener("click", function () {
  const info = {
    name: DOMSelectors.name.value,
    book: DOMSelectors.book.value,
    author: DOMSelectors.author.value,
    genre: DOMSelectors.genre.value,
  };

  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<h1 id="yourname">Hello ${info.name}</h1> <p id ="yourinfo">Your favorite book is ${info.book}. Your favorite author is ${info.author}. Your favorite genre is ${info.genre}</p>`
  );
  DOMSelectors.name.value = "";
  DOMSelectors.book.value = "";
  DOMSelectors.author.value = "";
  DOMSelectors.genre.value = "";
  DOMSelectors.erase.addEventListener("click", function () {
    document.getElementById("yourname").remove();
    document.getElementById("yourinfo").remove();
  });
});
// DOMSelectors.erase.addEventListener("click", function () {
//   document.getElementById("yourname").remove();
//   document.getElementById("yourinfo").remove();
// });
