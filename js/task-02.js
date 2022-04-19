const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsRef = ingredients.map(element => {
  const itemRef = document.createElement('li');
  itemRef.textContent = element;

  itemRef.classList.add('item');
  return itemRef;
});

const ingredientsList = document.querySelector('#ingredients')
  .append(...ingridientsRef);