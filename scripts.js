let circle = document.querySelectorAll(".circle");
let color = "#4af767";
let arr = [1, 2, 3, 4];
circle[0].style.backgroundColor = `${color}`;
circle[0].style.color = "black";

let form = document.querySelector(".form-container");

form.style.display = "inline";
let formtag = document.querySelector("form");
let btn1 = formtag.querySelector(".btn");

let selectplan = document.querySelector(".select-plan");
btn1.addEventListener("click", () => {
  form.style.display = "none";
  selectplan.style.display = "flex";
  circle[0].style.color = "white";
  circle[0].style.backgroundColor = "";
  circle[1].style.backgroundColor = `${color}`;
  circle[1].style.color = "black";
});
let rightbtn = document.querySelectorAll(".right-btn");
let pickaddons = document.querySelector(".pick-addons");
rightbtn[0].addEventListener("click", () => {
  selectplan.style.display = "none";
  pickaddons.style.display = "inline";
  circle[1].style.color = "white";
  circle[1].style.backgroundColor = "";
  circle[2].style.backgroundColor = `${color}`;
  circle[2].style.color = "black";
});
let finishingup = document.querySelector(".finishing-up");
rightbtn[1].addEventListener("click", () => {
  pickaddons.style.display = "none";
  finishingup.style.display = "inline";
  circle[2].style.color = "white";
  circle[2].style.backgroundColor = "";
  circle[3].style.color = "black";
  circle[3].style.backgroundColor = `${color}`;
});

let confirm = document.querySelector(".confirm");
let thankyou = document.querySelector(".thankyou");
confirm.addEventListener("click", () => {
  finishingup.style.display = "none";
  thankyou.style.display = "flex";
  circle[3].style.color = "white";
  circle[3].style.backgroundColor = "";
});

let leftbtn = document.querySelectorAll(".left-btn");

leftbtn[0].addEventListener("click", () => {
  form.style.display = "inline";
  selectplan.style.display = "none";
  circle[0].style.color = "black";
  circle[0].style.backgroundColor = `${color}`;
  circle[1].style.color = "white";
  circle[1].style.backgroundColor = "";
});

leftbtn[1].addEventListener("click", () => {
  selectplan.style.display = "flex";
  pickaddons.style.display = "none";
  circle[1].style.color = "black";
  circle[1].style.backgroundColor = `${color}`;
  circle[2].style.color = "white";
  circle[2].style.backgroundColor = "";
});

leftbtn[2].addEventListener("click", () => {
  pickaddons.style.display = "inline";
  finishingup.style.display = "none";
  circle[1].style.color = "black";
  circle[1].style.backgroundColor = `${color}`;
  circle[2].style.color = "white";
  circle[2].style.backgroundColor = "";
});

let ball = document.querySelector(".ball");
let toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  ball.classList.toggle("ball");
});

let boxes = document.querySelector(".boxes");
boxes.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", () => {
    box.style.boder = "1px solid black";
    console.log("red");
  });
});

function selectBox(box) {
  // Remove the "selected" class from all boxes
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => box.classList.remove("selected"));
  console.log("red");
  // Add the "selected" class to the clicked box
  box.classList.add("selected");
  box.addEventListener("onMouseout");
}

document.addEventListener("click", function (event) {
  const boxes = document.querySelectorAll(".box");
  if (!event.target.closest(".boxes")) {
    boxes.forEach((box) => box.classList.remove("selected"));
  }
});
