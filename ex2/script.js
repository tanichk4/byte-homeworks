// Hello world!

let firstVariable;

firstVariable = 'Hello World!';

console.log(firstVariable);

let userName = 'Tania';

console.log(userName)

let width, height, length;

let maxSpeed = 200,
    minSpeed = 40;

let button = 'button';
let form;
let input;

let myHobby = 'fishing';
// let myHobby = 'painting';

console.log(myHobby)

let childAge = 12;
// ...
childAge = 13;
console.log(childAge);

let rectangleWidth = 200;

let rectangleHeight = rectangleWidth;

console.log(rectangleHeight)

let user;
let userSurname;
let dinoAge;
let info1;

let operationResult;
let operationresult;
// різні змінні

let $user;
let _log;
// і таке можливо

// let 1us;
// let pet name;
// let dog-breed;
// крінж. не писати так!

let привітання = 'Hello darling!';
console.log(привітання);
// можна й так, не рекомендовано бо весь синтаксис джес викор латинку

// let let;
// let const;
// let for;
// зарезервовані слова, незя використ

const clientNickname = 'user42';

// clientNickname = 'user24';

// const empty;

// data types

console.log(typeof 123);
console.log(typeof 'test');

let example;
console.log('declare', typeof example)

example = 10;
console.log('init with number', typeof example)

example = 'abc';
console.log('init with string', typeof example)

// типи даних (їх 8)
// PRIMITIVE
// number (для роботи з числами)
// string (для роботи з текстом)
// boolean (для роботи з логічними) 
// null
// undefined

// BigInt (для роботи з великими числами)
// Symbol (для створ спец міток в обєктах)

// REFERENCE
// Object 
// Function* тип який належить обєкту але для зручності винесений у окремий 


// NUMBER

const number = 12;
console.log('typeof number', typeof number);

const decimalNumber = 0.01;
const PI = 3.14;

const num1 = 1;
const num2 = 2;
const result = num1 + num2;
console.log('result of multiply', result);

//STRING
// " "
// ''

const string = 'hello';
console.log('typeof string', typeof string);

const greeting ='Hello';
const space = ' ';
const name = 'Tania';

const fullGreeting = greeting + space + name;

console.log(fullGreeting);

const str1 = '2';
const str2 = '2';

const resultt = str1 + str2;

console.log('res', resultt);

// Boolean
// true
// false

const isUserOnline = false;
const hasPermissions = true;

const comparisonResult = 5 > 2;
console.log('comparisonResult', comparisonResult);

const isLinkVisited = false;

if(isLinkVisited) {
    console.log('The link was visited')
} else {
    console.log('The link was not visited')
}

// UNDEFINED
// undefined

let userr;
console.log('typeof user', typeof user);

let userrName = undefined;

console.log(typeof userrName)

// NULL

let userSurnamee = null;
// ...
userSurnamee = 'Brown'; 

console.log(typeof userSurnamee);

const element = document.querySelector('.test');

console.log('element', element)



// TYPES CONVERSION

// Перетворення в string
// String()

// створимо змінну яка рахуватиме бали
let pointsCount = 100;
// виведемо змінну в консоль и перевіримо її тип
console.log('pointsCount', pointsCount);
console.log('typeof pointsCount', typeof pointsCount);

// now convert into string
pointsCount = String(pointsCount);
console.log('pointsCount', pointsCount);
console.log('typeof pointsCount', typeof pointsCount);

// 10.00
let moneyAmount = 10;

// moneyAmount = 10.00;
// + .00
console.log('moneyAmount', moneyAmount);

const zeros = '.00';
const resulttt = String(moneyAmount) + zeros;

console.log('result', resulttt);


// another method
const amount = 22;
const amountWithZeros = amount + '.00';
console.log('amountWithZeros', amountWithZeros);

// Boolean to String

const isSuccess = true;
const stringIsSuccess = String(isSuccess);

console.log('isSuccess', isSuccess);
console.log('stringIsSuccess', stringIsSuccess);

console.log('typeof isSuccess', typeof isSuccess);
console.log('typeof stringIsSuccess', typeof stringIsSuccess);

// Converse to number
// Number() or operator '+'

let value = '42';
console.log('value', value);
console.log('typeof value', typeof value);

// value = +value;
value = Number(value);
// this one is more used

console.log('value', value);
console.log('typeof value', typeof value);

const a = '10';
const b = '12';
// const sum = +a + +b;
// doesnt look cool does it?

const sum = Number(a) + Number(b);
// way more readable :>
console.log('sum of a and b', sum);

//unseen conversion made by JS itself
const divisionResult = '10'/ '2';
console.log('divisionResult', divisionResult);
console.log('typeof divisionResult', typeof divisionResult);

//NaN (not a number) - number conversion error
console.log('Number(`one`)', Number('one'));
console.log('Number(`a12`)', Number('a12'));

const multiplyingResult = '10' * '2a';
console.log('multiplyingResult', multiplyingResult);

console.log('typeof multiplyingResult', typeof multiplyingResult);
// the output will be NaN but still is considered to be a number!


// now to Boolean()

// there are only 6 fasly values:
// ''
// 0
// null
// undefined
// NaN
// false

// everyother ones are truthy

console.log('Boolean(``)', Boolean('')); //false
console.log('Boolean(0)', Boolean(0)); //false
console.log('Boolean(`0`)', Boolean('0')); //true cuz the string aint empty, it has a пробел!!!
console.log('Boolean(` `)', Boolean(' ')); //true cuz the string aint empty
console.log('Boolean(`Test`)', Boolean('Test')); //true

// money quantity

const cashAmount = 0.000002;

// and then we check whether we can visit the shop
if (Boolean(cashAmount)) {
    console.log('Можна йти в магазин')
} else {
    console.log('Нема чого туди йти')
}