const inputField = document.querySelector('input');

inputField.addEventListener('submit', numberObjects);

function numberObjects(event) {
  event.preventDefault();
  const a = event.currentTarget.value;
  console.log('🚀 ~ file: task-10.js ~ line 8 ~ numberObjects ~ a', a);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
