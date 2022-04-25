const b = document.body;
const c = document.querySelector(".cursor");
const sqr1 = document.querySelector(".sq1");
const sqr2 = document.querySelector(".sq2");
const sqr3 = document.querySelector(".sq3");
const sqr4 = document.querySelector(".sq4");
const h1 = document.querySelector("h1");
let color = "black";

b.addEventListener("click", function () {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  color = `rgb(${red},${green}, ${blue})`;
  b.style.backgroundColor = color;
});

window.addEventListener("mousemove", moveMouse);

function moveMouse(e) {
  c.style.top = e.pageY + "px";
  c.style.left = e.pageX + "px";
}

window.addEventListener("mousedown", function () {
  c.classList.add("mouse-down");
});

window.addEventListener("mouseup", function () {
  c.classList.remove("mouse-down");
});

sqr1.addEventListener("click", function () {
  sqr1.style.backgroundColor = color;
});
sqr2.addEventListener("click", function () {
  sqr2.style.backgroundColor = color;
});
sqr3.addEventListener("click", function () {
  sqr3.style.backgroundColor = color;
});
sqr4.addEventListener("click", function () {
  sqr4.style.backgroundColor = color;
});
