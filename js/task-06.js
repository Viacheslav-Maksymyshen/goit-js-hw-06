const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', even => {
  even.currentTarget.value.trim().length == textInput.dataset.length
    ? (textInput.className = 'valid')
    : (textInput.className = 'invalid');
});
