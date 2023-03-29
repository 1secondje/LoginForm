const signUpBtn = document.querySelector('.signUpBtn');
const signUpDiv = document.querySelector('.signUpDiv')
const signInDiv = document.querySelector('.signInDiv')
const hiddenInput = document.querySelector('.field.hidden');
const forgotPass = document.querySelector('.forgotPass');
const inputDivs = document.querySelectorAll('.field');
const emailDiv = document.querySelector('.emailDiv');
const allInputs = document.querySelectorAll('input');
const title = document.querySelector('.title')
const submitBtn = document.querySelector('.submitBtn')

signUpBtn.addEventListener('click', (e) => {
	e.preventDefault();
	title.innerHTML = 'Sign Up'
	submitBtn.innerHTML = 'Sign Up'
	signUpDiv.classList.add('hidden')
	signInDiv.classList.remove('hidden')
	inputDivs.forEach((inputDiv) => {
		if (!inputDiv.classList.contains('signUp')) {
			inputDiv.classList.add('hidden');
		} else {
			inputDiv.classList.remove('hidden');
		}
	});

	allInputs.forEach((input) => {
		if (input.classList.contains('signUp')) {
			input.removeAttribute('disabled');
		}
	});
});

forgotPass.addEventListener('click', (e) => {
	e.preventDefault();
	title.innerHTML = 'Account recovery'
	submitBtn.innerHTML = 'Send an email'
	if (signInDiv.classList.contains('hidden')) {
		signInDiv.classList.toggle('hidden')
	}
	if (signUpDiv.classList.contains('hidden')) {
		signUpDiv.classList.toggle('hidden')
	}
	inputDivs.forEach((inputDiv) => {
		if (!inputDiv.classList.contains('emailDiv')) {
			inputDiv.classList.add('hidden');
		}
	});

	allInputs.forEach((input) => {
		if (!input.classList.contains('emailInput')) {
			input.setAttribute('disabled', 'disabled');
		}
	});
});