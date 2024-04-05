// Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

// через вопрос 
function checkNewAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
} 

// через или 
function checkNewTwoAge(age) {
  return (age > 18) || confirm('Родители разрешили?')
}


// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b

function min(a,b) {
  return (a < b) ? a : b;  
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));


// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
function pow(x,n) {
  if (n < 0) {
    return (alert(`Степень ${n} не поддерживается, используйте натуральное число`));
  }
  return (x ** n);
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));