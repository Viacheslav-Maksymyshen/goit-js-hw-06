const getRefSpan = document.querySelector('.color');
const getRefBtn = document.querySelector('.change-color');
const getRefBody = document.querySelector('body');

getRefBtn.addEventListener('click', changeBackgroundColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  getRefSpan.textContent = getRandomHexColor();
  getRefBody.style.backgroundColor = getRefSpan.textContent;
  console.log(getRefBody.style.backgroundColor);
}
