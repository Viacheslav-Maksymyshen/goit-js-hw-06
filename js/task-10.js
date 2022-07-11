const refBoxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

function getAmount() {
  var amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let localBox = [];
  let sumSizesDiv = 30;
  for (let i = 0; i < amount; i += 1) {
    localBox.push(
      `<div class = "boxes__div" style=" background-color : ${getRandomHexColor()}; 
      height : ${sumSizesDiv + 10}px; 
      width : ${sumSizesDiv + 10}px"> ${i + 1} </div>`,
    );
    sumSizesDiv += 10;
  }
  refBoxes.insertAdjacentHTML('afterbegin', localBox.join(''));
}

function destroyBoxes() {
  while (refBoxes.firstChild) {
    refBoxes.removeChild(refBoxes.firstChild);
  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnCreate.addEventListener('click', getAmount);
btnDestroy.addEventListener('click', destroyBoxes);
