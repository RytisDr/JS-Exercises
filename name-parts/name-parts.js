"use strict";

/*MY SOLUTION TO RECOGNIZE THE NAMES */

const fullName = "John John";
const fullNameSplit = fullName.split(" ");
console.log(`First name is: ${fullNameSplit[0]}`);
if (fullNameSplit.length == 2) {
  console.log(`Last name is: ${fullNameSplit[fullNameSplit.length - 1]}`);
} else if (fullNameSplit.length == 3) {
  console.log(
    `First name is: ${fullNameSplit[0]}.\nSecond name is: ${
      fullNameSplit[1]
    }.\nLast name is: ${fullNameSplit[fullNameSplit.length - 1]}`
  );
} else if (fullNameSplit.length == 4) {
  console.log(
    `First name is: ${fullNameSplit[0]}.\nSecond name is: ${
      fullNameSplit[1]
    }.\nThird name is: ${fullNameSplit[2]}.\nLast name is: ${
      fullNameSplit[fullNameSplit.length - 1]
    }`
  );
}

/* WORKING BUT LONG AND HARD TO READ */
/* let message =
  fullNameSplit.length == 2
    ? " Last name is:" + fullNameSplit[fullNameSplit.length - 1]
    : fullNameSplit.length == 3
      ? " Second name is:" +
        fullNameSplit[1] +
        " Last name is:" +
        fullNameSplit[fullNameSplit.length - 1]
      : fullNameSplit.length == 4
        ? " Second name is:" +
          fullNameSplit[1] +
          " Third name is:" +
          fullNameSplit[2] +
          " Last name is:" +
          fullNameSplit[fullNameSplit.length - 1]
        : " and you only have one name";

console.log("First name is:" + fullNameSplit[0] + message);
 */
