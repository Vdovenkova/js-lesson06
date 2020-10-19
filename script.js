'use strict';

//  проверка на число, функция Макса Лескина:
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

// нашла формулу вычисления целого случайного числа в инете
// здесь https://myrusakov.ru/js-random-numbers.html
function beginGame(min, max) {
  let randomInt = 0; // а вот и замыкание)
  randomInt = Math.floor(Math.random() * (max - min)) + min;

  // запрос числа у пользователя
  let checkInteger = function() {
    let userInt = 0;
    userInt = prompt ("Введи число от 1 до 100");
    if (userInt === null) {
      return alert ("Игра окончена!");
    } else if (userInt === '' || userInt === 0 || !isNumber(userInt)) {
      alert ('Введи число!');
      checkInteger(); // баа!! да это же рекурсия!! крутотенюшка))
    } else if (randomInt < userInt) {
      alert('Загаданное число меньше');
      checkInteger();
    } else if (randomInt > userInt) {
      alert('Загаданное число больше');
      checkInteger();
    } else if (+userInt === randomInt) {
      return alert ('Поздравляю, Вы угадали!!!');
    }
  };
  checkInteger();
  // console.log('Загаданное число: ', randomInt);
}
beginGame(1, 100);

