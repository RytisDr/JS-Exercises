"use strict";
let inputText;
let N;
let btn = document.querySelector("#typeBtn");

btn.addEventListener("click", function() {
  inputText = document.querySelector("#inputText").value;
  if (inputText.length > 0) {
    loop();
  }
});

function loop() {
  N = 0;
  setInterval(function() {
    if (N <= inputText.length) {
      let newText = inputText.substring(0, N);
      document.querySelector("#typewriter").textContent = newText;
      N++;
    }
  }, 400);
  if (N > inputText.length) {
  }
}
