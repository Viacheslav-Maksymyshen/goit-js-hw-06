const refs = {
  textInput: document.querySelector('#font-size-control'),
  textOutput: document.querySelector('#text'),
};
setAttribute(
  'style',
  'list-style-type: none; display: flex; align-items: center; justify-content: space-evenly',
);
refs.textInput.addEventListener('input', event => {
  refs.textOutput.textContent = event.currentTarget.value;
});
