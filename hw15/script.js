// task 1 ???

// task 2 

const user = {
    name: "gabriel",
    surname: "brown",
    age: 17,
    height: 178,
};

const {name, surname, ...parameters} = user
// console.log(parameters)

// task 3 

const max = (a, b) => {
    return a > b ? a : b;
};

const advancedMax = (...numbers) => {
    let max = 0

    numbers.forEach((num) => {
        if(num > max){
            max = num
        }
    })

    return max
}

// console.log(advancedMax(2, 6, 1, 12, 4))

// task 4 

const createMessage = (author, text, receiver, time) => {
    return `From ${author} to ${receiver}: ${text} (${time.toLocalDateString()})`;
};

const AdvancedCreateMessage = (author = 'guest', text, receiver, time = new Date()) => {
    return `From ${author} to ${receiver}: ${text} (${time.toLocalDateString()})`;
};

const message = createMessage({
    receiver: "John",
    text: "Hi!",
});

//task 5:

//task 5.1 

let str1 = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";
let regexp1 = /\w\d+\w/gi

// console.log(str1.match(regexp1))

// task 5.2 

let str2 = "ex.ua, google.com, yandex.ru, site.com.ua, my-page.com";
let regexp2 = /([a-z._-]+).([\w]{2,})/gi

// console.log(str2.match(regexp2))
// console.log(regexp2.test(str2))


//task 5.3

let str3 = "23344443455679";
let regexp3 = /(\d+){12,}/gi

console.log(str3.match(regexp3))


