const DOMSelectors = {
  box: document.getElementById("container-box"),
  button: document.getElementById("btn"),
  name: document.querySelector(`#name`),
  genre: document.querySelector(`#genre`),
  book: document.querySelector(`#book`),
  author: document.querySelector(`#author`),
};

// DOMSelectors.button.addEventListener("click", function () {
//   let input = DOMSelectors.input.value;
//   DOMSelectors.box.insertAdjacentHTML("beforeend", `<h1>${input}<h1>`);
//   DOMSelectors.input.value = "";
// });
// DOMSelectors.button.addEventListener("click", function () {
//   let input2 = DOMSelectors.input.value;
//   DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input2}</p>`);
//   DOMSelectors.input.value = "";
// });
DOMSelectors.button.addEventListener("click", function () {
  let name = DOMSelectors.name.value;
  let book = DOMSelectors.book.value;
  let genre = DOMSelectors.genre.value;
  let author = DOMSelectors.author.value;
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p>My name is ${name}. My favorite book is ${book}. My favorite book genre is ${genre}. My favorite author is ${author}</p>`
  );
  DOMSelectors.name.value = "";
  DOMSelectors.book.value = "";
  DOMSelectors.genre.value = "";
  DOMSelectors.author.value = "";
});
