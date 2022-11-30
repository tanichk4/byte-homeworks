// Задание 1

// Реализовать функцию, которая составляет расписание

// В цикле спрашивать у пользователя задачу и время, на которое она запланирована. После получения данных, записываем их в объект расписания в формате время: задача
// Окно ввода prompt должно появляться до тех пор пока пользователь не нажмет Esc или кнопку Отмена.
// По окончании работы функция должна вернуть объект с расписанием.
// Вывести распиание в консоль.
// Результат должен иметь приблизительно такой вид:

// {
//   "10:00": "Подъем",
//   "10:15": "Зарядка",
//   "10:30 ": "Завтрак",
// }

// Задание 2

// Написать функцию, которая находит сумму зарплат работников.

// На вход функция будет получать объект, где значениями в объекте являются СТРОКИ, содержащие размер заработной платы сотрудников компании.
// Необходимо посчитать сумму всех значений и вернуть ее.
// const salaries = {
//   John: "4300.00",
//   Ann: "5700.40",
//   Pete: "4900.95",
// };
// Результатом для данного объекта должно получится число 14901.35.
// Hint: работа с целыми числами более безопасна, чем с десятичными.

// ex 1

const makeASchedule = () => {
    let end = false
    const timetable = {};

    do{

        let addTime = prompt('Add time');
        let addTask = prompt('Add task');

        if((addTask == null || addTask == null)){
            end = true
        }else{
            timetable[addTime] = addTask
            alert('Task added')
        }
    
    }while(!end)

    return timetable
}

// let schedule = makeASchedule()
// console.log('Schedule:', schedule)

//ex 2

const salaries = {
  John: "4300.00",
  Ann: "5700.40",
  Pete: "4900.95",
};

const sumOfEmployeeSalaries = (salaries) => {

    let counter = 0

    for(let employees in salaries){
        counter += +salaries[employees]
    }

    let result = counter.toFixed(2)

    return result
}

// const sum = +sumOfEmployeesSalaries(salaries)
// console.log(sum)