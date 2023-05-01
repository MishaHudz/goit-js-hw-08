const { throttle, debounce } = require('lodash');

const form = document.querySelector('.feedback-form');
const savedObject = JSON.parse(localStorage.getItem('feedback-form-state'));

// if (savedObject) {
//   if (savedObject.email) {
//     form.elements.email.value = savedObject.email;
//   }
//   if (savedObject.message) {
//     form.elements.message.value = savedObject.message;
//   }
// }

form.elements.email.value = savedObject?.email || '';
form.elements.message.value = savedObject?.message || '';

form.addEventListener('submit', evt => {
  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  evt.currentTarget.reset();

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

const copyFun = throttle(onInputChange, 500);
