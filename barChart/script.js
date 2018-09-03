"use strict";
window.addEventListener("DOMContentLoaded", init);
let divs;
let divArray;
let randomHeightValue;
let firstItem;
function init() {
  divs = null;
  divArray = Array.from(document.querySelectorAll("div"));
  setTimeout(loop, 100);
}

function loop() {
  let randomHeightValue = randomNumber(0, 100);

  shiftAndPush();
  firstItem.style.height = randomHeightValue + "px";
  displayArray();
  setTimeout(loop, 100);
}

function shiftAndPush() {
  firstItem = divArray.shift();
  divArray.push(firstItem);
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
function displayArray() {
  let joinedArray = divArray.join("");
  let newArray = joinedArray.substring(0, 40);
  divs = newArray;
  console.log(newArray);
}
