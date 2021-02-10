const orderPieces = prompt('Quantity you want to buy');
const credits = 23580;
const pricePerDroid = 3000;

const totalPrice = orderPieces * pricePerDroid;
const balanceCredit = credits - totalPrice;
let message;

if (orderPieces === null) {
  message = 'Отменено пользователем!';
} else if (balanceCredit >= 0) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else if (balanceCredit <= 0) {
  message = 'Недостаточно средств на счету!';
} else if (orderPieces !== Number) {
  message = 'Введено не число';
}

console.log(message);
