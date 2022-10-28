// Código para el ScrollReveal
window.sr = ScrollReveal();

const distance = '25px';
const duration = 800;

sr.reveal('.reveal-left', {
  duration: duration,
  origin: 'left',
  distance: `${distance}`,
})

sr.reveal('.reveal-right', {
  duration: duration,
  origin: 'right',
  distance: `${distance}`,
})

sr.reveal('.reveal-top', {
  duration: duration,
  distance: `${distance}`,
  origin: 'top'
});

sr.reveal('.reveal-bottom', {
  duration: duration,
  distance: `6px`,
  origin: 'bottom',
  delay: 700
})

// Scroll reveal VERTICAL

sr.reveal('.reveal-vertical1',{
  duration: duration,
  distance: `${distance}`,
  origin: 'top'
})

sr.reveal('.reveal-vertical2',{
  duration: duration,
  distance: `${distance}`,
  origin: 'bottom',
  delay: 300
})

sr.reveal('.reveal-vertical3',{
  duration: duration,
  distance: `${distance}`,
  origin: 'top',
  delay: 600
})

// Scroll reveal HORIZONTAL

sr.reveal('.reveal-horizontal1',{
  duration: duration,
  distance: `${distance}`,
  origin: 'left'
})

sr.reveal('.reveal-horizontal2',{
  duration: duration,
  distance: `${distance}`,
  origin: 'right',
  delay: 300
})

sr.reveal('.reveal-horizontal3',{
  duration: duration,
  distance: `${distance}`,
  origin: 'left',
  delay: 600
})