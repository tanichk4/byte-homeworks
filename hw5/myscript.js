//ex 1

const primeNumber = (a, b) => {

    if(a <= 1){
        alert('Помилка, число менше або рівне 1')
    }else{

        nextPrime:
        for (let i = a; i <= b; i++){

            //5 //6 //7 //... //40

            console.log('проміжок', i)

            for (let j = 2; j < i; j++){

                // i = 6
                // j = 2
                //2 //3 //4 //5

                if (i % j === 0){
                    continue nextPrime;
                }
            }

            console.log(i);
        }
    }
}

//ex 2

const LOGIN = 'admin';
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

    }

    if(isAuthSuccess){
        alert('welcome!')
    }else{
        alert('Tries ended')
    }
};
authorize()