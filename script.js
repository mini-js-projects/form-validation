const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.lastElementChild;
  if (input.value === '') {
    formControl.classList.add('error');
    small.textContent = message;
  }
}

function showSuccess(input) {
  input.parentElement.classList.add('success');
}

// Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }
});
