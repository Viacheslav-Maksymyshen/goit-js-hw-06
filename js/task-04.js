let counterValue = 0;

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  valueBtn: document.querySelector('#value'),
};

const decrementClik = () => {
  counterValue -= 1;
  refs.valueBtn.textContent = counterValue;
};

const incrementClik = () => {
  counterValue += 1;
  refs.valueBtn.textContent = counterValue;
};

refs.decrementBtn.addEventListener('click', decrementClik);
refs.incrementBtn.addEventListener('click', incrementClik);
