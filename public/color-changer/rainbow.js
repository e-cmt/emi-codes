const b = document.body;
const grid = document.querySelector("#grid");
const c = document.querySelector(".cursor");

for (i = 0; i <= 2400; i++) {
  let div = document.createElement("div");
  grid.append(div);
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  color = `rgb(${red}, ${green}, ${blue})`;
  div.style.backgroundColor = color;
  div.classList.add("square");
}

b.addEventListener("click", function () {
  for (i = 0; i <= 2400; i++) {
    let div = document.querySelector(`#grid div:nth-child(${i + 1})`);
    console.log(div);
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    color = `rgb(${red}, ${green}, ${blue})`;
    div.style.backgroundColor = color;
    div.classList.add("square");
  }
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
