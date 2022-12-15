import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    inputEmail: document.querySelector('input[type="email"]'),
    inputMessage: document.querySelector('textarea[name="message"]'),
};
savedMessage();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    evt.currenTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
function savedMessage() {
    const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saveMessage) {
        refs.inputMessage.value = saveMessage.formData.meessage;
        refs.inputEmail.value = savedMessage.formData.email;
    }
}
function onTextareaInput(evt) {
  JSON.parse(localStorage.getItem(STORAGE_KEY));
  formData[evt.target.name] = evt.target.value ;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


