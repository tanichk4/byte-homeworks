// Задание 1

// Реализовать регистрацию пользователя в валидацией пароля

// Спрашивать у пользователя имя, фамилию и пароль до тех пор, пока он не введет корректные значения.
// Валидными именем и фамилией явлются любые строки, которые содержат хотя бы 1 символ.
// Валидный пароль - это любая строка длинеее чем 6 символов и содержащая символы разного регистра. Примеры корректных паролей: AbCxx12, 1234xY, abcdeF. Примеры НЕ корректных паролей: 1q2w3e, 123456, xyzxyz.
// После валидации данных необходимо отформатировать имя и фамилию и вывести на экран с помощью alert полное имя пользователся в правильном формате. Под форматированием имеется ввиду написание имени и фамилии с большой буквы. Например, если юзер ввел jOhn bROWN, то в результате форматирования должно получится John Brown.
// Hints: вам может понадобится цикл do while, так же советуем разбивать код на отдельные функции, каждая с ОДНОЙ логической целью.

// Задание 2

// Реализовать функцию - генератор случайных чисел в заданном промежутке

// Функция должна принимать на вход 2 числа, которые являются границами промежутка.
// Функция должна возвращать случайное число, которое большое или равно меньшего числа и меньше или равно большего.

// ex 1

let userName
let userLastName
let userPassword

const upperCaseString = (userString) => {

    //aNna

    const firstSymbolString = (userString[0]).toUpperCase(); // A
    const symbolsString = (userString.slice(1)).toLowerCase(); // nna

    return firstSymbolString + symbolsString; // Anna
}

const userRegistrationName = () => {

    let userName

    do{
        userName = prompt('Enter your name: ');

        if(!userName){
            alert('Enter at least one string character')
        }else{
            break
        }

    }while(true);

    //aNna

    const upperCaseName = upperCaseString(userName) // Anna

    return upperCaseName
};

const userRegistrationLastName = () => {

    do{
        userLastName = prompt('Enter ur surname:');

        if(!userLastName){
            alert('Enter at least one string symbol')
        }else{
            break
        }

    }while(true);

    const upperCaseLastName = upperCaseString(userLastName)

    return upperCaseLastName
}

const userRegistrationPassword = () => {
    
    let userPassword

    do{
        userPassword = prompt('Enter password (at least 6 symbols різного реєстру):');

        if(!userPassword || userPassword.length < 6){

            alert('Enter a longer password')

        }else if(!isNaN(userPassword) || userPassword.toLowerCase() === userPassword || (userPassword.toUpperCase() === userPassword)){

            alert('Uncorrect password')

        }else{
            alert('Registration success!')
            break
        }

    }while(true)

    return userPassword;

}

const resName = userRegistrationName(); //Anna
const resLastName = userRegistrationLastName(); 
const resPassword = userRegistrationPassword();  

alert(`Ви зареєстровані під іменем: ${resName} ${resLastName}
Ваш пароль: ${resPassword}`);

// Alternative task 1 

const askUserData = () => {

    let userName
    let userLastName
    let userPassword
    let itsNotOkey = true

    do{
        userName = prompt('name');
        userLastName = prompt('last name');
        userPassword = prompt('password');

        itsNotOkey = validateData(userName, userLastName, userPassword)

    }while(itsOkey)
}

askUserData()
// ex 2

const getRandomNumber = (min, max) => {
    const random = min + Math.random(min) * (max + 1 - min);
    return Math.floor(random);
};

const resRandom = getRandomNumber(3, 30);
// console.log(resRandom);

