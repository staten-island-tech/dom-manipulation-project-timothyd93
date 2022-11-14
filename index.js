const DOMSelectors = {
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
  input: document.querySelector(`#input2`),
  button: document.getElementById("btn"),
  button: document.getElementById("btn2"),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<h1>${input}<h1>`);
  DOMSelectors.input.value = "";
});
DOMSelectors.button.addEventListener("click", function () {
  let input2 = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input2}</p>`);
  DOMSelectors.input.value = "";
});
