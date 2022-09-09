"use strict";
//alert("!");
console.log("JavaScript:)");
let a = prompt("Input a");
let b = prompt("Input b");
let c = prompt("Input c");
let d;
let x;
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert("NOT A NUMBER");
} else {
  if (a === 0) {
    if (b !== 0) {
      x = -c / b;
      alert(x);
    } else {
      alert("Error");
    }
  } else {
    d = b * b - 4 * a * c;
    if (d < 0) {
      alert("The equation has no roots");
    } else if (d == 0) {
      x = -b / (2 * a);
      alert(x);
    } else {
      alert((-b + Math.sqrt(d)) / (2 * a));
      alert((-b - Math.sqrt(d)) / (2 * a));
    }
  }
}
