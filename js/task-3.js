const adminPassword = 'jqueryismyjam';
let userInput = prompt('Your password');
let message;

if (userInput === adminPassword) {
  message = 'Добро пожаловать!';
} else if (userInput === null) {
  message = 'Отменено пользователем!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

console.log(message);
