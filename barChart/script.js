"use strict";
window.addEventListener("DOMContentLoaded", init);
let divs = document.querySelectorAll("div");
let divArray;
let firstItem;
let barHeight;
function init() {
  divArray = Array.from(divs);

  setTimeout(loop, 300);
}
function loop() {
  barHeight = randomNumber(0, 100);
  shiftAndPush();
  appendItem();

  setTimeout(loop, 300);
}
function shiftAndPush() {
  firstItem = divArray.shift();
  sizeAndColor();
  divArray.push(firstItem);
}
function sizeAndColor() {
  firstItem.style.height = barHeight + "px";
  if (barHeight < 33) {
    firstItem.style.backgroundColor = "red";
  } else if (barHeight > 33 && barHeight < 66) {
    firstItem.style.backgroundColor = "yellow";
  } else if (barHeight > 66 && barHeight < 100) {
    firstItem.style.backgroundColor = "green";
  }
}
function appendItem() {
  document.querySelector("body").appendChild(firstItem);
}
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
