"use strict";
console.log("<-----task-05----->");
let country = prompt("Выберите страну доставки.");
let message;

if (country === null) {
  console.log("Отменено пользователем");
} else {
  country = country.toLowerCase();
  const firstLetter = country[0].toUpperCase();
  const wordChange = country.substring(1);

  switch (country) {
    case "китай":
      message = "100";
      break;

    case "чили":
      message = "250";
      break;

    case "австралия":
      message = "170";
      break;

    case "индия":
      message = "80";
      break;

    case "ямайка":
      message = "120";
      break;

    default:
      message = "В вашей стране доставка не доступна";
  }

  if (message !== "В вашей стране доставка не доступна") {
    console.log(
      `Доставка в ${firstLetter}${wordChange} будет стоить ${message} кредитов.`
    );
  } else {
    console.log(message);
  }
}
