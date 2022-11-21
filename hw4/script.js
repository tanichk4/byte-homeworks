// Завдання 1

function getBoolean (a, b){
    return a > b;
};

const getSecondBoolean = (a ,b) => a > b;

// Завдання 2

const num1 = 5;
const num2 = 12;

function getSum (a, b){
    return a + b;
}

const getSecondSum = (a, b) => a + b;

let firstResSum = getSum(num1, num2)
let secondResSum = getSecondSum(num1, num2)

console.log(firstResSum)
console.log(secondResSum)

// Завдання 3

function expo(number, power = 2){
    return number ** power
};

const resultPower = expo(3);
console.log(resultPower);
const resultPower2 = expo(4, 3);
console.log(resultPower2);

// Завдання 4

const userDay = +prompt('Enter the day')
const geWeekDay = (num) => {
    switch (num){
        case 1:
            return 'ПН'
        case 2:
            return 'ВТ'
        case 3:
            return 'СР'
        case 4:
            return 'ЧТ'
        case 5:
            return 'ПТ'
        case 6:
            return 'СБ'
        case 7:
            return 'НД'
        default:
            return 'Немає такого дня!'
    }
}

const dayRes = geWeekDay(userDay)
console.log(dayRes)

// Завдання 5 

function userGreeting(){
    let userName = prompt('Enter ur name');
    let userAge = +prompt('Enter ur age');

    if(userAge > 30){
    // alert ('Welcome, ' + userName + '!')
    return 'Welcome, ' + userName + '!'
    }else{
    // alert('Hi' + userName + '!')
    return 'HI, ' + userName + '!'
    }
};