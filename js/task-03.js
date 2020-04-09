const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const num = prompt("ADMIN_PASSWORD");

if (num === "jqueryismyjam") {
    message = "Добро пожаловать!";
} else if (num === null) {
    message = "Отменено пользователем";
} else {
    message = "Доступ запрещен, неверный пароль!";
}
alert(message);