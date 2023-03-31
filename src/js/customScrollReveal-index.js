// Código para el ScrollReveal
window.sr = ScrollReveal();

const distance = '25px';
const duration = 500;

// Scroll reveal options

sr.reveal('.reveal1',{
  duration: duration,
  distance: `${distance}`,
  origin: 'bottom',
  delay: 300
})

sr.reveal('.reveal2',{
  duration: duration,
  distance: `${distance}`,
  origin: 'bottom',
  delay: 600
})

sr.reveal('.reveal3',{
  duration: duration,
  distance: `${distance}`,
  origin: 'bottom',
  delay: 900
})

sr.reveal('.reveal4',{
  duration: duration,
  distance: `${distance}`,
  origin: 'bottom',
  delay: 1200
})