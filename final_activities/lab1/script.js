const var1 = document.getElementById("name");
console.log(var1);
var1.style.color = "red";
var1.style.backgroundColor = "white";

const input = document.getElementById("textbox");
console.log(input);
input.addEventListener("mouseover", function () {
  input.style.backgroundColor = "red";
});

input.addEventListener("change", function () {
  var1.innerHTML = "YOW: " + input.value;
});

input.addEventListener("input", function () {
  var1.innerHTML = "" + input.value;
});

input.addEventListener("mouseout", function () {
  input.style.backgroundColor = "yellow";
});

const input1 = document.getElementById("textbox1");
console.log(input1);
input1.addEventListener("focus", function () {
  input1.style.backgroundColor = "pink";
});

input1.addEventListener("blur", function () {
  input1.style.backgroundColor = "violet";
});

const btn = document.getElementById("btn1");
console.log(btn);
btn.style.backgroundColor = "yellow";
btn.style.color = "brown";
btn.addEventListener("click", function () {
  var1.innerHTML = "BULAGA!";
  var1.style.color = "blue";
});

const btn2 = document.getElementById("btn2");
console.log(btn2);
btn2.style.backgroundColor = "yellow";
btn2.style.color = "brown";
btn2.addEventListener("dblclick", function () {
  var1.innerHTML = "MAMAAAA!";
  var1.style.color = "green";
});

const img = document.getElementById("img1");
console.log(img);
img.addEventListener("mouseover", function () {
  mouse1.innerHTML = "Your mouse is in image";
});

img.addEventListener("mouseout", function () {
  mouse1.innerHTML = "Mouse left the image";
});

const mouse1 = document.getElementById("mouse");
console.log(mouse1);
