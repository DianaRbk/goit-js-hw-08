import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};
const { email, message, form } = refs;

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));
populateForm();

function onFormInput() {
  const formData = {
    email: email.value,
    message: message.value,
  };
  const formDataToString = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataToString);
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log({
    email: email.value,
    message: message.value,
  });
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateForm() {
  const savedObject = localStorage.getItem(STORAGE_KEY);
  const parsedObject = JSON.parse(savedObject);

  if (parsedObject) {
    email.value = parsedObject.email;
    message.value = parsedObject.message;
  }
}
