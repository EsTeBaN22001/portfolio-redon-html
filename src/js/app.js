// Efecto del navBar al hacer scroll
if(document.querySelector('.header')){

  const header = document.querySelector('.header');
  window.addEventListener('scroll', function(){
    header.classList.toggle('down', window.scrollY > 0);
  })

}

// Código para el pre-loader de la página

window.addEventListener('load', function(){
  const loader = document.querySelector('.loader');
  loader.classList.toggle('loader2');
})