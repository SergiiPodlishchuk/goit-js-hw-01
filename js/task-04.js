'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let message;
const num = prompt('Сколько дроидов вы хотите купить?');

if (num === null) {
    message = 'Отменено пользователем';
} else if (credits < pricePerDroid * num) {
    message = 'Недостаточно средств на счету!'
} else {
    console.log(num);
    const totalPrice = credits - Number(num) * pricePerDroid;
    console.log(totalPrice);
    message = `Вы купили ${num} дроидов, на счету осталось ${totalPrice} кредитов.`;
}


alert(message);