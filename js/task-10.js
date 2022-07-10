const inputField = document.querySelector('input');
const refBoxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

let createGlobalNumber = [];

function getAmount() {
  var amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let createLocalNumber = [];
  createGlobalNumber = createLocalNumber;

  let sumSizesDiv = 30;
  for (let i = 0; i < amount; i += 1) {
    createLocalNumber.push(
      `<div class = "boxes__div" style=" background-color : ${getRandomHexColor()}; 
      height : ${sumSizesDiv + 10}px; 
      width : ${sumSizesDiv + 10}px"> ${i + 1} </div>`,
    );
    sumSizesDiv += 10;
  }
}

function createBoxes() {
  refBoxes.insertAdjacentHTML('afterbegin', createGlobalNumber.join(''));
}

function destroyBoxes() {
  while (refBoxes.firstChild) {
    refBoxes.removeChild(refBoxes.firstChild);
  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

inputField.addEventListener('input', getAmount);
btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
