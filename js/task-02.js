const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsId = document.querySelector('#ingredients');

const ingredientsItems = ingredients => {
  return ingredients.map(ingredient => {
    const createItems = document.createElement('li');
    createItems.classList.add('items');
    createItems.textContent = ingredient;
    return createItems;
  });
};
const makeIngredientsItems = ingredientsItems(ingredients);
ingredientsId.append(...makeIngredientsItems);
