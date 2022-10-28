const config = {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  focusAt: 'center',
  gap: 10,
  autoplay: 5000,
  animationDuration: 1000,
  hoverpause: false,
  breakpoints: {
    800: {
      perView: 2
    },
    480: {
      perView: 1
    }
  }
}

new Glide('.glide', config).mount()
new Glide('.glide2', config).mount()
new Glide('.glide3', config).mount()