const retypedEmail = document.getElementById('confirm-email');

retypedEmail.addEventListener('keydown', () => {
  const email = document.getElementById('email');

  if (email.value !== retypedEmail.value) {
    console.log('Wrong!')
  }

})

