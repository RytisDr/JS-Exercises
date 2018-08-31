"use strict";
let original = document.querySelector("#original").textContent;
let mocking = document.querySelector("#mocking");
let character;
window.addEventListener("DOMContentLoaded", loopThroughString);
function loopThroughString() {
  let N = 0;

  while (N <= original.length) {
    let randomValue = getRandomNr(1, 3);
    let newText = original.substring(0, N);
    assignRandomCaps(randomValue, newText, N);
    N++;
  }
  mocking.textContent = character;
}

function assignRandomCaps(randomValue, newText, N) {
  if (randomValue == 1) {
    character += newText.charAt(N - 1).toUpperCase();
  } else if (randomValue == 2) {
    character += newText.charAt(N - 1).toLowerCase();
  }
}
function getRandomNr(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
