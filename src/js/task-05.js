const textoEntrada = document.querySelector("#name-input");
console.log(textoEntrada);

const textoSalida = document.querySelector("#name-output");
console.log(textoSalida);

textoEntrada.addEventListener("input", (e) =>{
    textoSalida.textContent = e.currentTarget.value;
});