"use strict";

console.log("<-----task-04----->");

const credits = 23580;
const pricePerDroid = 3000;
let message;
const num = prompt("Сколько дроидов вы хотите купить?");
const numToNumber = Number(num);

if (num === null) {
  message = "Отменено пользователем";
} else if (credits < pricePerDroid * numToNumber) {
  message = "Недостаточно средств на счету!";
} else if (Number.isNaN(numToNumber)) {
  message = "ввели не число";
} else {
  const totalPrice = credits - numToNumber * pricePerDroid;
  message = `Вы купили ${num} дроидов, на счету осталось ${totalPrice} кредитов.`;
}
console.log(message);
