alert(null || 2 || undefined)  // 2
alert(alert(1) || 2 || alert(3)) // 1 2 

alert(1 && null && 2) // null
alert(alert(1) && alert(2)) // 1 undefined 
alert(null || 2 && 3 || 4); // null || (2 && 3) || 4  =  null || 3 || 4  =  3 


let value = NaN;

value &&= 10; // NaN
value ||= 20; // 20
value &&= 30; // 30
value ||= 40; // 30

alert(value);

const age = prompt("Введите число:");
if (age >= 14 && age <= 90) {
  alert(`${age} в диапазоне от 14 до 90 включительно`)
} else {
  alert(`${age} не находится в диапазоне от 14 до 90 включительно`)
}

const age_2 = prompt("Введите число:");
if (!(age_2 >= 14 && age_2 <= 90)) {
  alert(`${age_2} не находится в диапазоне от 14 до 90 включительно`)  
} else {
  alert(`${age_2} в диапазоне от 14 до 90 включительно`)
}

const age_3 = prompt("Введите число:");
if (!(age_3 < 14 || age_3 > 90)) {
  alert(`${age_3} не находится в диапазоне от 14 до 90 включительно`)  
} else {
  alert(`${age_3} в диапазоне от 14 до 90 включительно`)
}






if (-1 || 0) alert( 'first' ); // first
if (-1 && 0) alert( 'second' ); // - 
if (null || -1 && 1) alert( 'third' ); // third









const login = prompt("Ваш логин:", '');

if (login === 'Админ') {

  const password = prompt('Введите пароль:')

  if (password == 'Я главный') {
    alert('Здравствуйте!')
  } else if (password == "" || password == null){
    alert('Отменено');
  } else {
    alert('Неверный пароль!')
  }
} else if (login == '' || login == null) {
  alert('Отменено')
} else {
  alert('Я вас не знаю')
}