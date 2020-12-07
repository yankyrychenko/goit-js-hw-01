let total = 0;
const inputRef = document.querySelector(`.task-six .input `);
const buttonSubmitRef = document.querySelector(`.task-six .submit`);
const buttonExitRef = document.querySelector(`.task-six .exit`);

buttonSubmitRef.addEventListener(`click`, () => {
  let input = Number(inputRef.value);
  total += input;
});

buttonExitRef.addEventListener(`click`, () => {
    console.log(`Общая сумма чисел равна ${total}`);
});
