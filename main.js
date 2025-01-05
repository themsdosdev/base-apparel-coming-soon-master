const form = document.querySelector(".container-content-form");
const inputEmail = document.querySelector(".container-content-form--email");
const error = document.querySelector(".container-content-form-email--message");


const VALID_EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
const ERROR_MESSAGE = "Please provide a valid email";
const ERROR_STYLE = "2px solid red";
const VALID_STYLE = "1px solid hsl(0, 36%, 70%)";

const ERROR_ICON_URL = 'url("./images/icon-error.svg")';
const VALID_ICON_URL = 'url("")';

function isValidEmail(email) {
  return VALID_EMAIL_REGEX.test(email);
}

function showError() {
  inputEmail.style.border = ERROR_STYLE;
  inputEmail.style.backgroundImage = ERROR_ICON_URL;
  error.innerHTML = ERROR_MESSAGE;
}

function hideError() {
  inputEmail.style.border = VALID_STYLE;
  inputEmail.style.backgroundImage = VALID_ICON_URL;
  error.innerHTML = "";
}


form.addEventListener("submit", (e) => {
  if (isValidEmail(inputEmail.value)) {
    hideError(); 
  } else {
    e.preventDefault(); 
    showError(); 
  }
});
