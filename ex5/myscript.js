// const LOGIN = 'ADMIN';
// const PASSWORD = '1q2w3e';

// const authorize = () => {
//  let userPassword;
//  let userLogin;
//  let isAuthSuccess = false;

//  do{
//     userLogin = prompt('Login:');
//     if(!userLogin) {
//         alert('Enter login!');
//         continue;
//     }

//     userPassword = prompt('Password:');
//     if(!userPassword) {
//         alert('Enter Password!');
//         continue;
//     }

//     if(userPassword === PASSWORD || userLogin === LOGIN) {
//         isAuthSuccess = true 
//     } else {
//         alert('Дані не вірні!')
//     }

//     break;
//  } while (!isAuthSuccess);

//  alert('Welcome!');
// }

// authorize()

// const drawPyramid = (height) => {
//     for(let i = 0; i < height; i++) {
//         let spacesBefore = '';
//         let stars = '';

//         for (let j = 0; j < 2 * i + 1; j++) {
//         stars += '*';
//         }

//         for (let k = 0; k < height - i - 1; k++) {
//         spacesBefore += ' ';
//         }
//         console.log(spacesBefore + stars)
//     }
// };

// const desiredHeight = Number(prompt('Яка висота піраміди?'));
// drawPyramid(desiredHeight)

