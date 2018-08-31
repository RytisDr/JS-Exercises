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
  N = 1;
  let loopInterval = setInterval(function() {
    if (N <= inputText.length) {
      let newText = inputText.substring(0, N);
      makeSound(newText, N);
      document.querySelector("#typewriter").textContent = newText;
      N++;
    }
    if (N > inputText.length) clearInterval(loopInterval);
  }, 600);
}
function makeSound(newText, N) {
  let character = newText.charAt(N - 1);
  if (character == " ") {
    document.querySelector("#typespace").play();
  } else {
    if (character == character.toUpperCase()) {
      document.querySelector("#typekey1").play();
    }
    if (character == character.toLowerCase()) {
      document.querySelector("#typekey2").play();
    }
  }
}
