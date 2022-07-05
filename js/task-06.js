const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', () => {
  const a = textInput.currentTarget.value.length;
  const b = textInput.dataset.length;

  if (a < b) {
    textInput.classList.add('valid');
  } else {
    textInput.classList.add('invalid');
  }

  console.log(dataLength);
});

// textInput.addEventListener('input', event => {
//   event.currentTarget.value < 6
//     ? (output.textContent = 'Anonymous')
//     : (output.textContent = event.currentTarget.value);
// });
