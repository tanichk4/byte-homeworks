// Destructuring 

// Object

// const user = {
//     name: "Jack", 
//     age: 41,
// };

// const userName = user.name;
// const userAge = user.age;

// const { name, age } = user;
// console.log("name", name);
// console.log("age", age);

// const rectangle = {
//     width: 200,
//     height: 100,
// };

// const { width, height } = rectangle;
// console.log(width)
// console.log(height)

// Переименование при деструктурирующем присваивании

// const person = {
//     name: "Nikita",
//     hobby: "Rap",
// }

// const { name: personName, hobby: personHobby } = person;
// console.log(personHobby)

// const obj = {
//     w: 100,
//     h: 200,
//     d: 50,
// };

// const { w: width, h: height, d: depth } = obj;
// console.log(width)


// Значення за замовчуванням
// const client = {
//     login: "sam",
// };

// const admin = {
//     login: "mannnn",
//     role: "admin",
// }
// const { login, role = "client" } = client;
// console.log(login, role);
// console.log(role);

// const options = {
//     title: "Menu",
// };

// const { width = 120, height = 200, title } = options;
// console.log(width);

// const test = {
//     x: null,
//     y: undefined,
//     z: 0,
// };

// const { x = "x", y = "y", z = "z", c = "" } = test;
// console.log(y);

// Деструкуризація масива

// const numbers = [1, 2, 4];
// const a = numbers[0];
// const b = numbers[1];
// console.log(a, b)

// const [ a, b, c ] = numbers
// console.log(b, c);

// const [, , n] = numbers
// console.log(n);

const ordersQueue = [
    {
        id: "2423424",
        item: "tv",
    },
    {
        id: "2423425",
        item: "phone",
    },
    {
        id: "2423426",
        item: "scooter",
    },
];

// const firstOrder = ordersQueue[0];
const [firstOrder] = ordersQueue;
// console.log(firstOrder);

const characterFullName = "John Wick";
const [charName, charSurname] = characterFullName.split(' ')
// console.log(characterFullName.split(' '));
// console.log(charName);
// console.log(charSurname);

// Вкладена деструктуризація

const family = {
    son: {
        age: 12,
        name: "Kyle",
        hobbies: ["music", "games"],
    },
    dad: {
        age: 42,
        name: "Nick",
        hobbies: ["fishing", "sports"],
    },
    mom: {
        age: 39,
        name: "Ann",
    },
};

const {
    dad: { 
        hobbies: [primaryHobby]
    }, 
    son: { name: sonName, hobbies: sonHobbies },
} = family;

// console.log('primaryHobby', primaryHobby);
// console.log('sonName', sonName);
// console.log('sonHobbies', sonHobbies);


// const drawRectangle = (width, height, color, content) => {
//   const rect = document.createElement("div");

//   rect.style.width = `${width}px`;
//   rect.style.height = `${height}px`;
//   rect.style.backgroundColor = color;
//   rect.innerHTML = content;

//   document.body.append(rect);
// };

// drawRectangle(100, 100, "red", "Hello world");

// записуємо аби було зрозуміло!


const drawRectangle = ({ width, height, color, content }) => {
    const rect = document.createElement("div");
  
    rect.style.width = `${width}px`;
    rect.style.height = `${height}px`;
    rect.style.backgroundColor = color;
    rect.innerHTML = content;
  
    document.body.append(rect);
};

// drawRectangle({
//     height: 120,
//     width: 130,
//     color: 'pink',
//     content: 'BRAAAH',
// });

const handleInput = (event) => {
    const {
        target: {value},
        target: input
    } = event;

    console.log('value', value)
    console.log('input', input)
}

const input = document.createElement("input");
input.addEventListener('input', handleInput);
// document.body.append(input);

const getSalariesData = (salaries) => {
    const sum = salaries.reduce((total, value) => total + value, 0);
    const average = sum / salaries.length;
  
    // return {
    //   sum,
    //   average,
    // };
    return [sum, average];
};
  
const [salSum, salAvg] = getSalariesData([300, 200, 100, 700]);
  
// console.log(salSum, salAvg)
  

// Деструктуризация в перебирающих методах

const usersList = [
    {
      name: "sam",
      role: "client",
    },
    {
      name: "john",
      role: "admin",
    },
    {
      name: "peter",
      role: "client",
    },
    {
      name: "jack",
      role: "admin",
    },
  ];
  
//   const adminList = usersList.filter((user) => user.role === "admin");
  const adminList = usersList.filter(({ role }) => role === "admin");
//   console.log(`adminList`, adminList);


const exampleObj = {
    a: "a value",
    b: "b value",
    c: "c value",
  };
  
const entries = Object.entries(exampleObj);
// console.log(`entries`, entries)

  
entries.forEach(([key, value]) => {
    // console.log(`key`, key);
    // console.log(`value`, value);
});
  
  
// Rest и spread операторы

const data = {
    isAgree: false,
    login: "sam",
    email: "sam@gmail.com",
    password: "1q2w3e",
};

const { isAgree, ...restValues } = data;
// console.log(`isAgree`, isAgree);
// console.log(`restValues`, restValues);

const queue = ["jack", "john", "peter", "alex"];
const [firstGuest, ...restGuests] = queue;

// console.log('firstGuest', firstGuest);
// console.log('restGuests', restGuests);

const calc = (operation, ...numbers) => {
    console.log('operation:', operation)
    console.log(numbers)

    switch(operation) {
        case 'add':
            return numbers.reduce((a, b) => a + b, 0);
        case 'multiply':
            return numbers.reduce((a, b) => a * b, 1);
    }
// return a + b + c
};

// const res = calc('add', 1, 2, 3);
// const res2 = calc('multiply', 3, 3, 3);
// console.log(res);
// console.log(res2);

// spread
// ...


const product = {
    name: "TV",
    id: "123",
    price: "200",
};
  
const productUpdates = {
    discount: 50,
    price: "100",
};
  
const updatedProduct = {
    ...product,
    ...productUpdates,
};
  
// console.log(`updatedProduct`, updatedProduct);
  
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6, 7];

const mergedArr = [...arr1, ...arr2];
// console.log(mergedArr);


const exampleArr = [1, 2, 3];
const newArr = [0, ...exampleArr, 4];
// console.log(`newArr`, newArr);

const numbersList = [17, 43, 5, 4, 8];

// const max = Math.max(1, 3, 2, 7);
const max = Math.max(...numbersList);

console.log(`max`, max);