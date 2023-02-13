const tamano = document.querySelector("input");
console.log(tamano);

const texto = document.querySelector("span");
console.log(texto);

tamano.addEventListener('input', (e) =>{
    texto.style.fontSize = `${e.currentTarget.value}px`;
} )