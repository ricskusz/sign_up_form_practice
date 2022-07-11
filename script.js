let password = document.querySelector('#password');
let passwordCheck = document.querySelector('#cpassword');
let submitButton = document.querySelector('.sign-up-button');
const ERROR_MESSAGE = document.querySelectorAll('.error-message');

submitButton.addEventListener('click', () => {
    if(password.value != passwordCheck.value){
        ERROR_MESSAGE.forEach(message => message.setAttribute('style', 'display: block'));
    }else{
        ERROR_MESSAGE.forEach(message => message.setAttribute('style', 'display: none'));
    };
});