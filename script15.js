const thumbnails = document.querySelector('.thumbnails');
const mainImage = document.querySelector('.main-image img');

// Aqui vamos comparar se o objeto clicado é uma imagem - === (IGUAL) e o IMG tem que estar em maiúscula
thumbnails.addEventListener('click', (event) =>
    {
    if (event.target.tagName === 'IMG') {const newSrc = event.target.src;  mainImage.src = newSrc;}
    });