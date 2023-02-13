const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galeria = document.querySelector('.gallery');
console.log(galeria);

const elementoImagen = images.map(images => {
  const elementoItem = document.createElement('li');
  elementoItem.classList.add('item');
  //console.log(elementoItem);

  const imagen = document.createElement('img');
  imagen.classList.add('images');
  imagen.src = images.url;
  imagen.alt = images.alt;
  console.log(imagen);

  return `<li> <img src = '${images.url}', alt = '${images.alt}', width = 150, height = 100> </li>`
}).join('')

galeria.insertAdjacentHTML('afterbegin', elementoImagen);