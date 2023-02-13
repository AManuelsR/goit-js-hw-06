function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");

const btnCrear = document.querySelector("[data-create]");

const btnDestruir = document.querySelector("[data-destroy]");

const divCajas = document.querySelector("#boxes");



btnCrear.addEventListener('click', e => createBoxes(Number(input.value)));

function createBoxes(cantidad) {
const divs = [];
for(let i = 0; i < cantidad; i += 1) {
 const div = document.createElement('div');
 div.style.width = div.style.height = `${30 + i * 10}px `;
 div.style.backgroundColor = getRandomHexColor();
 divs.push(div);
}
divCajas.append(...divs);
};

btnDestruir.addEventListener('click', deleteBoxes);

function deleteBoxes(event) {
  divCajas.innerHTML = "";
}