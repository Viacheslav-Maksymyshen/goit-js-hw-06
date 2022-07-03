const listId = document.querySelector('#categories').querySelectorAll('.item');
console.log(`Number of categories:${listId.length}`);

const listItem = listId;
listItem.forEach(element => {
  console.log(`Category: ${element.querySelector('h2').textContent}`);
  console.log(`Elements: ${element.querySelectorAll('li').length}`);
});
