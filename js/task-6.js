let total = 0;
let input = prompt('Number you add will count to summary');

while (input !== null) {
  if (isNaN(input)) {
    console.log('Было введено не число, попробуйте еще раз');
  } else {
    total += Number(input);
  }

  input = prompt('Number you add will count to summary');
}

console.log(`Общая сумма чисел равна ${total}`);