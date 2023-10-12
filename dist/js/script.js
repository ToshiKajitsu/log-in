;
const state = {
    registrationForm: {
      valid: null,
      errors: [],
    }
};
  
const emailInput = document.querySelector('.emailInput');
const passwordInput = document.querySelector('.passwordInput');
const submit = document.querySelector('.form_auth_button');
  
emailInput.addEventListener('keyup', (e) => {
    const inputValue = e.target.value;
    state.registrationForm.value = inputValue;
    if (inputValue.match(/^\d+$/)) {
      state.registrationForm.valid = true;
      state.registrationForm.errors = [];
    } else {
      state.registrationForm.valid = false;
      state.registrationForm.errors.push('wrong format');
    }
    
    submit.disabled = !state.registrationForm.valid;
    if (state.registrationForm.valid) {
        emailInput.style.border = null;
    } else {
        emailInput.style.border = 'thick solid red';
      // тут выводим ошибки
    }
});
