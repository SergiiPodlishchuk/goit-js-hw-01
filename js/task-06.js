"use strict";
console.log("<-----task-06----->");
let input;
let total = 0;
let message;

do {
  input = prompt("Введите число");
  total += Number(input);
} while (input !== null);

console.log(`Общая сумма чисел равна ${total}`);
alert(`Общая сумма чисел равна ${total}`);
