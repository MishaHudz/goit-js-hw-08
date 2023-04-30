const { throttle, debounce } = require('lodash');

const form = document.querySelector('.feedback-form');
const savedObject = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedObject) {
  if (savedObject.email) {
    form.elements.email.value = savedObject.email;
  }
  if (savedObject.message) {
    form.elements.message.value = savedObject.message;
  }
}

form.addEventListener('click', evt => {
  if (evt.target.nodeName !== 'BUTTON') return;

  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  form.elements.email.value = '';
  form.elements.message.value = '';

  localStorage.removeItem('feedback-form-state');
});

form.addEventListener('input', evt => {
  copyFun(evt);
});

function onInputChange(evt) {
  const createdObject = {};

  createdObject.email = form.elements.email.value;
  createdObject.message = form.elements.message.value;

  console.log();
  localStorage.setItem('feedback-form-state', JSON.stringify(createdObject));
}

const copyFun = debounce(onInputChange, 500);
