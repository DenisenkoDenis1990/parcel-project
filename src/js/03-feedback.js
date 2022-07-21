var throttle = require('lodash.throttle');
const inputForm = document.querySelector('.feedback-form');
const mailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');
const dataValues = {};

inputForm.addEventListener('submit', onSubmitButtonClicK);
inputForm.addEventListener('input', throttle(onTextAreaInput, 500));
checkStorage();

function onTextAreaInput(event) {
  dataValues[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(dataValues));
}
function onSubmitButtonClicK(event) {
  event.preventDefault();
  localStorage.clear();
  event.currentTarget.reset();
  console.log(dataValues);
}

function checkStorage() {
  if (localStorage.getItem('feedback-form-state')) {
    if (mailEl.value === 'undefined') {
      mailEl.value = '';
    }
    mailEl.value = JSON.parse(
      localStorage.getItem('feedback-form-state')
    ).email;
    if (messageEl.value === 'undefined') {
      messageEl.value = '';
    }
    messageEl.value = JSON.parse(
      localStorage.getItem('feedback-form-state')
    ).message;
  }
}
