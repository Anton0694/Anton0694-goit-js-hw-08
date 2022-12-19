import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    inputEmail: document.querySelector('input[name="email"]'),
    inputMessage: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));


function onFormSubmit(evt) {
evt.preventDefault();
evt.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
formData = {};
}    

function onTextareaInput(evt) {
    formData = {
    email: refs.form.email.value,
    message: refs.form.message.value,
  };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}
const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedFormData) {
  refs.form.email.value = savedFormData.email;
  refs.form.message.value = savedFormData.message;
}
  
   





