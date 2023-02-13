
//declaracion de variables

const btnSuma = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

const btnResta = document.querySelector('button[data-action = "decrement"]');

const valor = document.querySelector('#value');


btnSuma.addEventListener("click", ()  => {counterValue++; valor.textContent = counterValue});
btnResta.addEventListener("click", () => {counterValue--; valor.textContent = counterValue});