// Efecto del navBar al hacer scroll
if(document.querySelector('.header')){

  const header = document.querySelector('.header');
  window.addEventListener('scroll', function(){
    header.classList.toggle('down', window.scrollY > 0);
  })

  const menuIcon = document.querySelector('.menu-icon');

  menuIcon.addEventListener('click', function(){

    const nav = document.querySelector('.nav');

    nav.classList.toggle('active');

  })

}

// Código para señalar como activo los enlaces de la página en el footer
if(document.querySelector('.footer')){

  const body = document.querySelector('body');

  // Página del index
  if(body.classList.contains('index')){
    const linkIndexFooter = document.querySelector('.navFooter a[href="/"]');
    linkIndexFooter.classList.add('activeLink');
  }

  // Página del about-us
  if(body.classList.contains('about-us')){
    const linkIndexFooter = document.querySelector('.navFooter a[href="/about-us"]');
    linkIndexFooter.classList.add('activeLink');
  }

  // Página del about-us
  if(body.classList.contains('contact')){
    const linkIndexFooter = document.querySelector('.navFooter a[href="/contact"]');
    linkIndexFooter.classList.add('activeLink');
  }

  // Página del about-us
  if(body.classList.contains('proyects')){
    const linkIndexFooter = document.querySelector('.navFooter a[href="/proyects"]');
    linkIndexFooter.classList.add('activeLink');
  }

}

// Código para el pre-loader de la página

window.addEventListener('load', function(){
  const loader = document.querySelector('.loader');
  loader.classList.toggle('loader2');
})


// Código para el read-more de los proyectos

if(document.querySelector('.proyects-cards-container')){

  const proyectsCardsContainer = document.querySelector('.proyects-cards-container')

  proyectsCardsContainer.addEventListener('click', function(e){

    if(e.target.classList.value == 'read-more'){

      const readMoreButton = e.target

      const extendedText = e.target.previousElementSibling
      extendedText.classList.toggle('read-more-active')

      if(extendedText.classList.contains('read-more-active')){
        readMoreButton.textContent = "Leer menos..."
      }else{
        readMoreButton.textContent = "Leer más..."
      }

    }

  })

}