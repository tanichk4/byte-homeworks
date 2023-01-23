// FORMS in JS
const form = document.getElementById('login-form');

const passwordInput = document.getElementById("password");
const loginInput = document.getElementById("login");

const handleSubmit = (event) => {
    event.preventDefault();

    const formValues = {
        login: loginInput.value,
        password: passwordInput.value,
    }

    console.log('formValues', formValues);
};

form.addEventListener('submit', handleSubmit);


// Работа с инпутами

const exampleInput = document.getElementById("example");
const exampleContainer = document.getElementById("example-container");

const handleChange = (event) => {
    console.log('CHANGE event', event);
    console.log('event.target.value', event.target.value)
}