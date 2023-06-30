const textButtonsContainer = document.querySelector('.text-buttons-container')

if(textButtonsContainer){

  const summaryButton = document.querySelector('#summary-button')
  const completButton = document.querySelector('#complet-button')

  const summaryText = document.querySelector('#summary-text')
  const completText = document.querySelector('#complet-text')
  
  textButtonsContainer.addEventListener( 'click', (e)=>{
    
    if(e.target.id === 'summary-button'){

      completButton.classList.remove('active')
      completText.classList.remove('active')
      summaryButton.classList.add('active')

      setTimeout(()=>{
        summaryText.classList.add('active')
      }, 300)

    }
    
    if(e.target.id === 'complet-button'){

      summaryButton.classList.remove('active')
      summaryText.classList.remove('active')
      completButton.classList.add('active')

      setTimeout(()=>{
        completText.classList.add('active')
      }, 300)

    }

  })

}