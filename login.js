const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateForm() {
    const email = emailInput.value;
    const password = passwordInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 8;

    emailError.style.display = isEmailValid || email === '' ? 'none' : 'block';
    passwordError.style.display = isPasswordValid || password === '' ? 'none' : 'block';

    submitBtn.disabled = !(isEmailValid && isPasswordValid);
}

emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'dashboard.html';
});