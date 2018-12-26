/*var allowSubmit = false;

function capcha_filled () {
    allowSubmit = true;
}

function capcha_expired () {
    allowSubmit = false;
}

function check_if_capcha_is_filled (e) {
    if(allowSubmit) return true;
    e.preventDefault();
    alert('Fill in the capcha!');
} */

var securityQuestion = document.querySelector('.securityQuestion');
var submitButton = document.querySelector('#contact_form_submit');
var saveAnswerBtn = document.querySelector('#save_answer');
var securityAnswerInput = document.querySelector('#security_answer');
//var response = securityAnswerInput.value;
var number1 = Math.floor(Math.random() * 10) + 1;
var number2 = Math.floor(Math.random() * 10) + 1;
var answer = number1 + number2;

securityQuestion.textContent = number1 + ' + ' + number2;
submitButton.disabled = true;

saveAnswerBtn.addEventListener('click', function() {
    if (parseInt(securityAnswerInput.value) === answer) {
        submitButton.disabled = false;
    } else {
        alert('Please try again');
    }
});
