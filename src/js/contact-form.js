if(document.querySelector('.form')){

  const form = document.querySelector('.form')

  form.addEventListener('submit', handleSubmit);

  async function handleSubmit(event){

    event.preventDefault()
    const data = new FormData(this)
    const response = await fetch(this.action, {
      method: this.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })

    if(response.ok){
      this.reset()
      Swal.fire(
        'Gracias por contactarme!',
        'En breve te responderé!',
        'success'
      )
    }

  }

}