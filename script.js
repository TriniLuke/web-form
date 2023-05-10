const error = document.getElementById('error-message');
const zip = document.getElementById('zip');
const country = document.getElementById('country');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('confirm-password');


const validateFirstName = () => {

  if(!firstName.checkValidity()) {
    error.innerText = firstName.validationMessage;
    firstName.classList.add('invalid');
    return false;
  }
  error.innerText = '';
  firstName.classList.remove('invalid');
  firstName.classList.add('valid');
  return true;
}

const validateLastName = () => {

  if(!lastName.checkValidity()) {
    error.innerText = lastName.validationMessage;
    lastName.classList.add('invalid');
    return false;
  }
  error.innerText = '';
  lastName.classList.remove('invalid');
  lastName.classList.add('valid');
  return true;
}

const validateEmail = () => {
 
  if(!email.checkValidity()) {
    error.innerText = email.validationMessage;
    email.classList.add('invalid');
    return false;
  }
  error.innerText = '';
  email.classList.remove('invalid');
  email.classList.add('valid');
  return true;
}

const validatePassword = () => {
  if(!password.checkValidity()) {
    error.innerText = password.validationMessage;
    password.classList.add('invalid');
    return false;
  } 
  if(password.value !== passwordConfirm.value) {
    error.innerText = "Please enter the same password";
    passwordConfirm.classList.add('invalid');
    return false;
  } 
  error.innerText = '';
  password.classList.remove('invalid');
  password.classList.add('valid');
  passwordConfirm.classList.remove('invalid');
  passwordConfirm.classList.add('valid');
  return true;
}

const validateCountryZip = () => {
  if(!country.checkValidity()) {
    error.innerText = country.validationMessage;
    country.classList.add('invalid');
    return false;
  }
  if(country.value === 'USA' || country.value === 'America') {
    zip.setAttribute('required')
  }
  error.innerText = '';
  country.classList.remove('invalid');
  country.classList.add('valid');
  zip.removeAttribute("required");
  return true;
}

function validate(e) {
  e.preventDefault();
  if(!validateFirstName() || !validateLastName() || !validateEmail() || !validatePassword() || !validateCountryZip()) {
    return false;
  }
}

