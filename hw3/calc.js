// Завдання 4

const numberOne = Number(prompt("Введіть перше число: "));
const numberTwo = Number(prompt("Введіть друге число: "));

const numberOperation = Number(prompt("Введіть дію(+ - / *)"));

switch (numberOperation) {
    case '+':
        alert("Результат додавання чисел: " + (numberOne + numberTwo));
    break;
    case '-':
        alert("Результат віднімання чисел: " + (numberOne - numberTwo));
    break;
    case '/':
        alert("Результат ділення чисел: " + (numberOne / numberTwo));
    break;
    case '*':
        alert("Результат множення чисел: " + (numberOne * numberTwo));
    break;
    default:
        alert("Немає такого варіанту дії!");
}