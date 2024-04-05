if ("0") {
  alert('Привет');  // "Привет"
} else {
  alert('Пока');  // "Привет"
}

const message = prompt('Какое "официальное" название JavaScript?');
if (message === 'ECMAScript') {
  alert('Верно!')
} else {
  alert('Не знаете? ECMAScript!')
}

const userNum = prompt('Введите число');
if (userNum > 0) {
  alert(userNum + ' - положительное число');
} else if (userNum < 0) {
  alert(userNum + ' - отрицательное число');
} else {
  alert(userNum + ' - ноль');
}

let result = (a + b < 4) ? 'Мало' : 'Много';

let message_2 = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
      ''; 