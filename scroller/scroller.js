"use strict";

window.addEventListener("DOMContentLoaded", init);

let text;
let position;
let array;

function init() {
  // Get original text
  text = document.querySelector("#scroller").textContent;

  // fix up all white-space, replace with single space
  // from: https://stackoverflow.com/questions/1981349/regex-to-replace-multiple-spaces-with-a-single-space
  text = text.replace(/\s\s+/g, " ");

  // clear the original text from HTML
  document.querySelector("#scroller").textContent = "";

  array = Array.from(text);

  // start the loop
  setTimeout(loop, 100);
}

function loop() {
  position = 0;
  shiftAndPush();

  let joinedArr = array.join("");
  const newText = joinedArr.substring(position, position + 40);

  // display the new text
  document.querySelector("#scroller").textContent = newText;

  // loop the loop
  setTimeout(loop, 100);
}
function shiftAndPush() {
  let firstItem = array.shift();
  array.push(firstItem);
}
