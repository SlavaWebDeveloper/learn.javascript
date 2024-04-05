let i = 3;

while (i) {
  alert( i-- );
} 
/*
  alert 3
  alert 2
  alert 1
*/

let n = 0;
while (++n < 5) alert( n );
/*
  alert 1
  alert 2
  alert 3
  alert 4
*/

let m = 0;
while (m++ < 5) alert( m );
/*
  alert 1
  alert 2
  alert 3
  alert 4
  alert 5
*/

for (let i = 0; i < 5; i++) alert( i );
/*
  alert 0
  alert 1
  alert 2
  alert 3
  alert 4
*/

for (let i = 0; i < 5; ++i) alert( i );
/*
  alert 0
  alert 1
  alert 2
  alert 3
  alert 4
*/

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i )
  }
}

let u = 0
while (u < 3) {
  alert( `number ${u}!` );
  u++;
}


let userNum;
do {
  userNum = prompt('Введите число больше 100', 0);

} while (userNum == '' || userNum == null || userNum <= 100)


// const naturalNum = 

let firstNum = 10;
nextPrime:
for (let i = 2; i < firstNum; i++) {
  for (let j = 2; j < i; j++) {
    if( i % j == 0) continue nextPrime;
  }
  console.log(i);
}