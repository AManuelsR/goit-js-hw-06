const numerodecategorias = document.querySelectorAll('.item');
console.log('Number of categories:' + numerodecategorias.length);

numerodecategorias.forEach(function(elemento, index){
    const categoria = elemento.querySelector('H2');
    const elementos = elemento.querySelectorAll('li');

    console.log('Category: ' + categoria.textContent);
    console.log('Elements: ' + elementos.length);
})
