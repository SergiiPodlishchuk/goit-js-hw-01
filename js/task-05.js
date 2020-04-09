"use strict";

let country = prompt("Выберите страну доставки.");
let message;

if (country === null) {
  alert("Отменено пользователем");
} else {
  country = country.toLowerCase();

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
    alert(`Доставка в ${country} будет стоить ${message} кредитов.`);
  } else {
    alert(message);
  }
}
