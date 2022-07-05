let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueBtn = document.querySelector('#value');

const decrementClik = () => {
  counterValue -= 1;
  valueBtn.textContent = counterValue;
};

const incrementClik = () => {
  counterValue += 1;
  valueBtn.textContent = counterValue;
};

decrementBtn.addEventListener('click', incrementClik);
incrementBtn.addEventListener('click', decrementClik);
