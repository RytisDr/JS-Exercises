"use strict";
window.addEventListener("DOMContentLoaded", log1);
//Version1
function log1() {
  let documentArr = Array.from(document.all);
  documentArr.forEach(element => {
    console.log("element: " + element.nodeName);
    //    console.log(element.attributes);
    if (element.attributes.length > 0) {
      for (let i = 0; i < element.attributes.length; i++) {
        console.log(
          `attr ${element.attributes[i].nodeName}="` +
            `${element.attributes[i].nodeValue}"`
        );
      }
    }
  });
}
