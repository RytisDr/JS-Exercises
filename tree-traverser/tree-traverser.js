"use strict";
window.addEventListener("DOMContentLoaded", log2);
//VERSION1
function log1() {
  let documentArr = Array.from(document.all);
  documentArr.forEach(element => {
    //let attr = Array.from(element.attributes);
    //console.log(attr);
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
//VERSION2
function log2() {
  let documentArr = Array.from(document.all);
  documentArr.forEach(element => {
    if (element.attributes.length > 0) {
      for (let i = 0; i < element.attributes.length; i++) {
        console.log(
          `<${element.tagName.toLowerCase()} ${
            element.attributes[i].nodeName
          }="${element.attributes[i].nodeValue}">`
        );
      }
    } else {
      console.log("<" + element.tagName.toLowerCase() + ">");
    }
  });
}
