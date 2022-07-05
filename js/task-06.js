const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', even => {
  const a = even.currentTarget.value.length;
  const b = textInput.dataset.length;

  if (a < b && textInput.classList.contains('valid') === false) {
    textInput.classList.add('valid');
  } else if (a > b && textInput.classList.contains('valid') === true) {
    textInput.classList.replace('valid', 'invalid');
  } else if (a > b && textInput.classList.contains('invalid') === false) {
    textInput.classList.add('invalid');
  } else if (a < b && textInput.classList.contains('invalid') === true) {
    textInput.classList.replace('invalid', 'valid');
  }

  console.log(a);
  console.log(b);
});
