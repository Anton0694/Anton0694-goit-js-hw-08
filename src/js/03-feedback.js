import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    inputEmail: document.querySelector('input[type="email"]'),
    inputMessage: document.querySelector('textarea[name="message"]'),
};
onSaveInputData();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}
function onSaveInputData(evt) {

  const userMessage = refs.inputMessage.value;
  const userEmail = refs.inputEmail.name;
  formData[userEmail] = userMessage;
   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }

function onTextareaInput(evt) {
  JSON.parse(localStorage.getItem(STORAGE_KEY));
    formData[evt.target.name] = evt.target.value;
    console.log(formData)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}


