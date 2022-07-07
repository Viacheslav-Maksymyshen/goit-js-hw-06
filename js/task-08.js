const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formOutput = ({
    elements: { email, password },
  } = event.currentTarget);

  if (formOutput.elements.email.value === '' || formOutput.elements.password.value === '') {
    return alert('Please fill in all the fields!');
  }
}
