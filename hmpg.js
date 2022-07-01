const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phoneno = document.getElementById('phoneno');
const password = document.getElementById('password');
const passowrd2 = document.getElementById('password2');

form.addEventListener('submit',(e) => {
    e.preventDefault();
//custom func
checkInputs();
});

function checkInputs() {
    //get values from 
const usernameValue = username.value.trim();  
const emailValue = email.value.trim();  
const phonenoValue = phoneno.value.trim(); 
const passwordValue = password.value.trim(); 
const password2Value = passowrd2.value.trim();

if (usernameValue === '') {
    //show error
    //add error class
setErrorFor(username,'Entered username is incorrect');
}
else{
    //add sucess class
    setSuccessFor(username);
}

};

function setErrorFor(input,message) {
    const formControl = input.parentElement; // .formcontrol
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innertext = message;

    //add error class 
    formControl.className = 'form-control error'
} 