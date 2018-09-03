"use strict";
window.addEventListener("DOMContentLoaded", init);
let divs = document.querySelectorAll("div");
let divArray = Array.from(divs);
let randomHeightValue;
function init() {
  setTimeout(loop, 100);
}

function loop() {
  randomHeightValue = randomNumber(0, 100);

  shiftAndPush();
  scroll();
  setTimeout(loop, 100);
}

function shiftAndPush() {
  let firstItem = divArray.shift();
  randomDivHeight(firstItem);
  divArray.push(firstItem);
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
function randomDivHeight(firstItem) {
  firstItem.style.height = randomHeightValue + "px";
}
function scroll() {
  let joinedArray = divArray.join("");
  let newArray = joinedArray.substring(0, 40);
  divs = newArray;
}
