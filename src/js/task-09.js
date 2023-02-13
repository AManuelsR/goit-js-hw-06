function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector(".color");
const boton = document.querySelector(".change-color");

boton.addEventListener("click", cambiarColor);

function cambiarColor (color){

  const colorAleatorio = getRandomHexColor()
  document.body.style.background = colorAleatorio;
  color.textContent = colorAleatorio;
}