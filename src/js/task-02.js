const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientes = document.querySelector('#ingredients');
ingredientes.append('Ingredientes',document.createElement('p'))

const elementos = ingredients.map(ingredients => {
const nvoElemento = document.createElement('li');
nvoElemento.classList.add('item');
nvoElemento.textContent = ingredients;

return nvoElemento;
});

ingredientes.append(...elementos);
console.log(ingredientes);