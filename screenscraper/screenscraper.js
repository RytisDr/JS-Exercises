//THIS SCRIPT IS MADE TO RUN IN THE BROWSER CONSOLE, WHILE IN https://en.wikipedia.org/wiki/List_of_JavaScript_libraries
let headlines = document.querySelectorAll(".mw-headline");
let testArr = [];
for (let i = 0; i < headlines.length - 2; i++) {
  if (headlines[i].parentElement.nextElementSibling.localName != "ul") {
    testArr.push(
      Array.from(
        headlines[
          i
        ].parentElement.nextElementSibling.nextElementSibling.querySelectorAll(
          "ul li"
        )
      ).map(e => e.textContent)
    );
  } else {
    testArr.push(
      Array.from(
        headlines[i].parentElement.nextElementSibling.querySelectorAll("ul li")
      ).map(e => e.textContent)
    );
  }
}
let finalArr = [];
testArr.forEach(level1 => level1.forEach(level2 => finalArr.push(level2)));
console.log(finalArr);
