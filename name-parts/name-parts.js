"use strict";

const fullName = "John John Florence";

const space1 = fullName.indexOf(" ");
const space2 = fullName.indexOf(" ", space1 + 1);
const firstName = fullName.substring(0, space1);
const secondName = fullName.substring(space1, space2);
const lastName = fullName.substring(space2);
console.log(firstName);
console.log(secondName);
console.log(lastName);
