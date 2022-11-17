// Exercise 1

const a = 5;
const b = 10;

// +
let addResult = a + b;
console.log('Addition result of a & b is ', addResult);

// -
let subsResult = a - b;
console.log('Substraction result of a & b is ', subsResult);
let subsResult1 = b - a;
console.log('Substraction result of b & a is ', subsResult1);

// /
let divResult = a / b;
console.log('Divison result of a & b is ', divResult);
let divResult1 = b / a;
console.log('Divison result of b & a is ', divResult1);

// *
let mulResult = a * b;
console.log('Multiply result of a & b is ', mulResult);


// Exercise 2

// true && true // true (the second one)

// false || true // true

//true && 'false' // false (returned the second truthy one. The string 'false' is a truthy value.)

// 0 && 1 || ' ' && 42 // 0 || 42; 42 (0 is a falsy value and || looks for a truthy value so 42)

// null == undefined // true (because both of them are falsy)

// '' == 0 // true (because both of them are falsy)

// 1 === '1' // false (because 1 is number and '1' is string)

// NaN === NaN && true // === is more prior than && so: false && true: false

// true || false && true || false // && is more prior than || so: true || false || false: true || false: true

// (true || false) && (true || false) // true && true: true (second one)

// 10 || (0 && 'dog') || '' // && is more prior than || so: 0: 10 || 0 || '': 10

// (10 || 0) && ('dog' || '') // 10 || 'dog': dog (but i don't know why :D)


// Exercise 3

const numberOne = Number(prompt('Введи перше число!'));
// console.log('Перше число ', numberOne);
const numberTwo = Number(prompt('Введи друге число!'));
// console.log('Перше число ', numberTwo);
const firstOverSecond = numberOne + ' більше ' + numberTwo;
const secondOverFirst = numberOne + ' менше ' + numberTwo;

if (numberOne === numberTwo) {
alert("Числа рівні");
} else if (numberOne > numberTwo) {
alert(firstOverSecond);
} else {
    alert(secondOverFirst);
}

