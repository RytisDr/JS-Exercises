"use strict";
let original = document.querySelector("#original").textContent;
let character = "";
window.addEventListener("DOMContentLoaded", loopThroughString);
function loopThroughString() {
  let N = 1;
  while (N <= original.length) {
    let randomValue = getRandomNr(0, 2);
    let newText = original.substring(0, N);
    assignRandomCaps(randomValue, newText, N);
    N++;
  }
  document.querySelector("#mocking").textContent = character;
}

function assignRandomCaps(randomValue, newText, N) {
  if (randomValue == 0) {
    character += newText.charAt(N - 1).toUpperCase();
  } else if (randomValue == 1) {
    character += newText.charAt(N - 1).toLowerCase();
  }
}
function getRandomNr(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
