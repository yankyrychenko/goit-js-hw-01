const countryName = prompt('Country you want deliver to');

let country;
let price = 0;
let message;

if (countryName === null) {
  message = 'Отменено пользователем!';
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();

  switch (country) {
    case 'Китай':
      price = 100;
      break;

    case 'Чили':
      price = 250;
      break;

    case 'Австралия':
      price = 170;
      break;

    case 'Индия':
      price = 80;
      break;

    case 'Ямайка':
      price = 120;
      break;

    default:
      message = 'В выбранную страну доставка недоступна.';
  }
}

if (price > 0) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

console.log(message);
