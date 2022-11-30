const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';

const authorize = () => {

    let isAuthSuccess = false;
    let userAttempts = 3;

    while (userAttempts !== 0){
        let userLogin = prompt('Login: ');

        if (!userLogin) {
            alert('Enter login: ');
            continue;
        }

        let userPassword = prompt('Password: ');

        if(!userPassword) {
            alert('Enter password: ');
            continue;
        }

        if(userPassword === PASSWORD && userLogin === LOGIN){
            isAuthSuccess = true;
            break
        }else{
            userAttempts--
            alert('Дані не вірні. К-сть спроб' + userAttempts)
        }
        if(isAuthSuccess){
            alert('welcome!')
        }else{
            alert('Tries ended')
        }
    }
};
authorize()

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

