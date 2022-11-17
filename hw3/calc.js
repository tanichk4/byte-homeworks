// Завдання 4

const numberOne = Number(prompt("Введіть перше число: "));
const numberTwo = Number(prompt("Введіть друге число: "));

const addNumbers = numberOne + numberTwo;
const substractNumbers = numberOne - numberTwo;
const divideNumbers = numberOne / numberTwo;
const multiplyNumbers = numberOne * numberTwo;
const numberOperation = Number(prompt("Яку дію ви хочете виконати? (Введіть цифру) 1: Додавання; 2: Віднімання; 3: Ділення; 4: Множення."));

switch (numberOperation) {
    case 1:
        alert("Результат додавання чисел: " + addNumbers);
    break;
    case 2:
        alert("Результат віднімання чисел: " + substractNumbers);
    break;
    case 3:
        alert("Результат ділення чисел: " + divideNumbers);
    break;
    case 4:
        alert("Результат множення чисел: " + multiplyNumbers);
    break;
    default:
        alert("Немає такого варіанту дії!");
}