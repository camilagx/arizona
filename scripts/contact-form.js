const retypedEmail = document.getElementById('confirm-email');

//Function checks if email matches
retypedEmail.addEventListener('keydown', () => {
  const email = document.getElementById('email');
  const errorElement = document.querySelector('.warning-msg');

  if (email.value !== retypedEmail.value) {
    errorElement.classList.add('display');
  } else {
    errorElement.classList.toggle('display');
  }
})
