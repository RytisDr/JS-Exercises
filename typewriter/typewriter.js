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
  let loopInterval = setInterval(function type() {
    if (N <= inputText.length) {
      let newText = inputText.substring(0, N);
      document.querySelector("#typewriter").textContent = newText;
      N++;
    }
    if (N > inputText.length) clearInterval(loopInterval);
  }, 400);
}
