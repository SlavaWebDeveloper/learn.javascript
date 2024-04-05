
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1


console.log('a: 2', a);
console.log('b: 2', b);
console.log('c: 2', c);
console.log('d: 1', d);



let a_2 = 2;

let x = 1 + (a_2 *= 2); // 5
console.log('x: 5', x);


"" + 1 + 0; // 10
"" - 1 + 0; // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // "  -9  5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 //NaN
" \t \n" - 2   // -2


let a_3 = prompt("Первое число?", 1);
let b_3 = prompt("Второе число?", 2);

alert(a_3 + Number(b_3)); // 12