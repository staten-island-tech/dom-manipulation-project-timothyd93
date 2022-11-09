// const DOMSelectors = {
//   button: document.getElementById("btn"),
//   text: document.querySelector("#text"),
//   box: document.getElementById("big-black-box"),
//   points: document.querySelectorAll(".point"),
// };

// function backgroundAndText(background, text) {
//   background.style.backgroundColor = "red"; // element.style is used to make adjustments to the style of an element in js
//   text.textContent = "this is a big red box, now go look at console"; // .innerHTMl lets you edit an element, defined before the '.'. in this case it was "#text" being edited, defined by text.innerHTML. The desired element is selected through its assigned DOMSelector object.
// }

// //   Event Listeners wait for a specified event to happen to an element, and then execute code when their conditions are met

// DOMSelectors.button.addEventListener("click", function () {
//   backgroundAndText(DOMSelectors.box, DOMSelectors.text);
// });

// // When you click the button element, the function 'changeBackground()' will run

// // eventlisteners can be applied to any element, and any amount of elements

// function changeLi() {
//   let pointIndex = 1;
//   DOMSelectors.points.forEach((point) => {
//     point.addEventListener("click", function () {
//       point.textContent = `Hello I am point ${pointIndex}`;
//       pointIndex++;
//     });
//   });
// }
// changeLi();
// // will set the <li> value to 0 on first click, and the value will increase by 1 every time an <li> is clicked.

// //since all the list elements share the same class, they also share the same value when defined in js, which will cause a sudden jump if you're clicking on one <li> element and then switch to clicking another.
const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
};

// const cat = "meow";
// DOMSelectors.box.insertAdjacentHTML("afterend", `<h1>We are an ${cat}</h1>`);
DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input}<p>`);
  DOMSelectors.input.value = "";
});
