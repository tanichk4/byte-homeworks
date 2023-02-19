
// Promise

// Рассмотрим следующую задачу:
// - взять данные с сервера (асинхронная операция)
// - обработать данные (асинхронная операция)
// - вывести данные в консоль

const data = {
    name: "user",
    age: 25,
    role: "admin",
};
  
// console.log(`Getting data...`);

// setTimeout(() => {
//     console.log(`Data received`);
//     console.log(`data`, data);

//     console.log(`Processing data...`);
//     setTimeout(() => {
//         console.log(`Data processed`);
//         const birthYear = new Date().getFullYear() - data.age;
//         // const birthYear = new Date().getFullYear()
//         const processed = {
//             ...data,
//             birthYear,
//         }
//         console.log(processed)
//     }, 2000)
// }, 2000)

// const getUser = () => data;

// const processUser = (user) => {
//     const birthYear = new Date().getFullYear() - user.age;
//     return {
//         ...data,
//         birthYear,
//     }
// }


// const getProcessedData = (get, process) => {
//     setTimeout(() => {
//         const data = get()

//         setTimeout(() => {
//             const processed = process(data);
//             console.log(`processed`, processed)
//         })
//     }, 1000);
// }

// getProcessedData(getUser, processUser)

// Promise 

// const promise = new Promise((resolve, reject) => {
//     console.log(`Getting data...`);

//     setTimeout(() => {
//         console.log(`data`, data)
//         // return data

//         // resolve(data)
//         reject('oops')
//     }, 1000)
// });

// console.log(promise)

// promise.then((result) => {
//     console.log(`promise fulfilled`, promise)

//     console.log(result)
// }).catch((error) => {
//     console.log(`promise rejected`, promise)
//     console.log(error)
// }).finally(() => {
//     console.log(`promise FINALLY`, promise)
// })

// then
// catch
// finally 

// for(let i = 0; i < 3; i++) {
//     console.log(i)
// }

// const getUser = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(data)
//         }, 1500);
//     });
// };

// const processUser = (user) => {
//   const birthYear = new Date().getFullYear() - user.age;
//   const processed = {
//     ...user,
//     birthYear,
//   };

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(processed);
//     }, 1500);
//   });
// };

// getUser().then((result) => processUser(result).then((user) => console.log('user', user)))

const sleep = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}

// sleep(2000).then(() => console.log('AAA'))

// sleep(1500).then(() => {
//   console.log('waited 1.5 seconds')
// })


// Задача:
// - "отправить" форму на сервер
// - пока идет запрос поля должны быть disabled, а в кнопке
//   должен крутиться прелоадер
// - после "ответа" сервера вернуть форму в привычное состояние

const form = document.getElementById("login-form");
const preloader = document.getElementById("preloader");
const inputs = form.querySelectorAll("input");
const button = form.querySelector("button");

const handleSubmit = (event) => {
  event.preventDefault();
  toggleDisabled(button, ...inputs)
  toggleButtonLoading()

  sleep(1500).then(() => {

  })
}

const toggleDisabled = (...elements) => {
  console.log('elements', elements)

  elements.forEach((elem) => {
    if(elem.hasAttribute('disabled')) {
      elem.removeAttribute('disabled')
    } else {
      elem.setAttribute('disabled', '');
    }
  })
}

const toggleButtonLoading = () => {
  preloader.classList.toggle('hidden');
}

form.addEventListener('submit', handleSubmit)