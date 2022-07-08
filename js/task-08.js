const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  const fromForm = {
    email,
    password,
  };

  if (fromForm.email === '' || fromForm.password === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(fromForm);
  event.currentTarget.reset();

  // const {
  //   elements: { email, password },
  // } = event.currentTarget;

  // if (email.value === '' || password.value === '') {
  //   return alert('Please fill in all the fields!');
  // }

  // const formData = new FormData(event.currentTarget);

  // formData.forEach((value, name) => {});
}
