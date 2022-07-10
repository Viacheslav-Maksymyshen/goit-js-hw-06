const inputField = document.querySelector('input');
const refBoxes = document.querySelector('#boxes');
const BtnCreate = document.querySelector('button[data-create]');
const BtnDestroy = document.querySelector('button[data-destroy]');

let createGlobalNumber = [];

function getNaumbers(event) {
  let createLocalNumber = [];

  createGlobalNumber = createLocalNumber;
  let sumSizesDiv = 30;
  for (let i = 0; i < event.currentTarget.value; i += 1) {
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

inputField.addEventListener('input', getNaumbers);
BtnCreate.addEventListener('click', createBoxes);
BtnDestroy.addEventListener('click', destroyBoxes);
