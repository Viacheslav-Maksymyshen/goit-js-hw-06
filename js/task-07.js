const refs = {
  textInput: document.querySelector('#font-size-control'),
  textOutput: document.querySelector('#text'),
};

refs.textInput.value = refs.textInput.min;
refs.textInput.addEventListener('input', event => {
  refs.textOutput.style.fontSize = event.currentTarget.value + 'px';
});
