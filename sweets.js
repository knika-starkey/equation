"use strict";
let candies = prompt("How many candies?");
let count = candies;
let q;
while (count >= 0) {
  if (count == 0) {
    alert(" Пора купувати іншу коробку ... ");
    break;
  } else {
    console.log(count);
    if (candies / 2 < count) alert("Цукерок ще багато");
    else if (candies / 2 >= count && count > 3) alert("Цукерок обмаль");
    else alert("Цукерки закінчуються!");
    q = confirm("Ще цукерку?");
    if (q) count--;
    else break;
  }
}
