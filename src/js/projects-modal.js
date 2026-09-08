document.addEventListener('DOMContentLoaded', () => {
  // Datos de los proyectos
  const projectsData = {
    fotaza: {
      title: 'Fotaza',
      badge: 'Social Media',
      description:
        'Red social estilo Instagram y Pinterest para compartir publicaciones, comentarios, chats y reacciones en tiempo real.',
      technologies: [
        { icon: 'fa-brands fa-html5', label: 'HTML5', deg: 'deg1' },
        { icon: 'fa-brands fa-bootstrap', label: 'Bootstrap', deg: 'deg2' },
        { icon: 'fa-brands fa-node-js', label: 'Node.js', deg: 'deg4' },
        { icon: 'fa-solid fa-database', label: 'MySQL', deg: 'deg5' }
      ],
      features: [
        'Autenticación de usuarios con JWT',
        'Subida y compresión de imágenes',
        'Chat en tiempo real',
        'Reacciones y comentarios en posts'
      ],
      links: {
        demo: 'https://fotaza-rw2y.onrender.com/home',
        github: 'https://github.com/EsTeBaN22001/fotaza'
      },
      images: [
        { src: 'build/img/fotaza-index.webp', caption: 'Página principal - Muro de publicaciones' },
        { src: 'build/img/fotaza-explore.webp', caption: 'Página de exploración' },
        { src: 'build/img/fotaza-post.webp', caption: 'Página de publicación individual' },
        { src: 'build/img/fotaza-notifications.webp', caption: 'Página de notificaciones' },
        { src: 'build/img/fotaza-chat.webp', caption: 'Página de chat' },
        { src: 'build/img/fotaza-admin.webp', caption: 'Panel de administración' },
        { src: 'build/img/fotaza-profile.webp', caption: 'Perfil de usuario' }
      ]
    },
    trelloclon: {
      title: 'TrelloClon',
      badge: 'Task Management',
      description: 'Clon interactivo de Trello para gestionar y organizar tableros, columnas y tareas de proyectos ágiles.',
      technologies: [
        { icon: 'fa-brands fa-html5', label: 'HTML5', deg: 'deg1' },
        { icon: 'fa-brands fa-sass', label: 'SASS', deg: 'deg2' },
        { icon: 'fa-brands fa-angular', label: 'Angular', deg: 'deg3' },
        { icon: 'fa-brands fa-node-js', label: 'Node.js', deg: 'deg4' },
        { icon: 'fa-solid fa-database', label: 'Base de Datos', deg: 'deg5' }
      ],
      features: [
        'Creación y gestión de tableros',
        'Drag and Drop de tarjetas y listas',
        'Colaboración en tiempo real',
        'Asignación de fechas de vencimiento'
      ],
      links: {
        demo: 'https://trelloclon-app.netlify.app/',
        github: 'https://github.com/EsTeBaN22001/trello-clon-frontend'
      },
      images: [
        { src: 'build/img/trelloclon-index.webp', caption: 'Página de inicio' },
        { src: 'build/img/trelloclon-boards.webp', caption: 'Mis tableros' },
        { src: 'build/img/trelloclon-editboard.webp', caption: 'Editar tablero' },
        { src: 'build/img/trelloclon-profile.webp', caption: 'Perfil de usuario' }
      ]
    },
    equizzy: {
      title: 'EquizzyApp',
      badge: 'Quiz Platform',
      description:
        'Plataforma web de encuestas donde los usuarios pueden crear sus propios cuestionarios y responder los de otros.',
      technologies: [
        { icon: 'fa-brands fa-html5', label: 'HTML5', deg: 'deg1' },
        { icon: 'fa-brands fa-sass', label: 'SASS', deg: 'deg2' },
        { icon: 'fa-brands fa-js-square', label: 'JavaScript', deg: 'deg3' },
        { icon: 'fa-brands fa-php', label: 'PHP', deg: 'deg4' },
        { icon: 'fa-solid fa-database', label: 'MySQL', deg: 'deg5' }
      ],
      features: [
        'Constructor dinámico de encuestas',
        'Análisis de resultados en tiempo real',
        'Autenticación y perfiles de usuario',
        'Diseño responsivo'
      ],
      links: {
        demo: 'http://equizzy.infinityfreeapp.com',
        github: 'https://github.com/EsTeBaN22001/equizzyApp'
      },
      images: [
        { src: 'build/img/equizzy-index.webp', caption: 'Página de inicio' },
        { src: 'build/img/equizzy-poll.webp', caption: 'Encuesta' },
        { src: 'build/img/equizzy-pollresult.webp', caption: 'Resultado de la encuesta' },
        { src: 'build/img/equizzy-editpoll.webp', caption: 'Editar encuesta' },
        { src: 'build/img/equizzy-categories.webp', caption: 'Categorías de encuestas' },
        { src: 'build/img/equizzy-profile.webp', caption: 'Perfil de usuario' }
      ]
    },
    uptask: {
      title: 'UpTask',
      badge: 'Productivity',
      description: 'Administrador de tareas con autenticación y filtros para organizar proyectos y seguir el progreso en equipo.',
      technologies: [
        { icon: 'fa-brands fa-html5', label: 'HTML5', deg: 'deg1' },
        { icon: 'fa-brands fa-sass', label: 'SASS', deg: 'deg2' },
        { icon: 'fa-brands fa-js-square', label: 'JavaScript', deg: 'deg3' },
        { icon: 'fa-brands fa-php', label: 'PHP', deg: 'deg4' },
        { icon: 'fa-solid fa-database', label: 'MySQL', deg: 'deg5' }
      ],
      features: [
        'Gestión de múltiples proyectos',
        'Estado de tareas (Pendiente, En progreso, Completado)',
        'Sistema de autenticación seguro',
        'Filtros de búsqueda de tareas'
      ],
      links: {
        demo: 'http://uptask.infinityfreeapp.com',
        github: 'https://github.com/EsTeBaN22001/uptask'
      },
      images: [
        { src: 'build/img/uptask-index.webp', caption: 'Dashboard principal' },
        { src: 'build/img/uptask-login.webp', caption: 'Login de usuario' },
        { src: 'build/img/uptask-createProyect.webp', caption: 'Creación de un nuevo proyecto' },
        { src: 'build/img/uptask-tasks.webp', caption: 'Vista de lista de tareas' },
        { src: 'build/img/uptask-profile.webp', caption: 'Perfil de usuario' }
      ]
    },
    appsalon: {
      title: 'AppSalon',
      badge: 'Booking System',
      description: 'Sistema web para reservar turnos en salón de estética, selección dinámica de servicios y gestión de citas.',
      technologies: [
        { icon: 'fa-brands fa-html5', label: 'HTML5', deg: 'deg1' },
        { icon: 'fa-brands fa-sass', label: 'SASS', deg: 'deg2' },
        { icon: 'fa-brands fa-js-square', label: 'JavaScript', deg: 'deg3' },
        { icon: 'fa-brands fa-php', label: 'PHP', deg: 'deg4' },
        { icon: 'fa-solid fa-database', label: 'MySQL', deg: 'deg5' }
      ],
      features: [
        'Reserva de turnos con calendario',
        'Selección múltiple de servicios',
        'Panel de administrador para gestionar citas',
        'Envío de confirmaciones por correo'
      ],
      links: {
        demo: 'http://appsalon.infinityfreeapp.com',
        github: 'https://github.com/EsTeBaN22001/appSalon'
      },
      images: [
        { src: 'build/img/appsalon-index.webp', caption: 'Catálogo de servicios' },
        { src: 'build/img/appsalon-login.webp', caption: 'Inicio de sesión' },
        { src: 'build/img/appsalon-dateInfo.webp', caption: 'Selección de fecha y hora' },
        { src: 'build/img/appsalon-summary.webp', caption: 'Resumen de la cita' }
      ]
    },
    nissi: {
      title: 'Nissi Confecciones',
      badge: 'Client Website',
      description: 'Sitio corporativo para cliente textil incluyendo catálogo digital de productos, galería de fotos y contacto.',
      technologies: [
        { icon: 'fa-brands fa-html5', label: 'HTML5', deg: 'deg1' },
        { icon: 'fa-brands fa-sass', label: 'SASS', deg: 'deg2' },
        { icon: 'fa-brands fa-js-square', label: 'JavaScript', deg: 'deg3' },
        { icon: 'fa-brands fa-php', label: 'PHP', deg: 'deg4' },
        { icon: 'fa-solid fa-database', label: 'MySQL', deg: 'deg5' }
      ],
      features: [
        'Catálogo de productos interactivo',
        'Galería de imágenes de la empresa',
        'Formulario de contacto funcional',
        'Diseño adaptativo (Mobile First)'
      ],
      links: {
        demo: null,
        github: 'https://github.com/EsTeBaN22001/nissi-confecciones'
      },
      images: [
        { src: 'build/img/nissi-index.webp', caption: 'Página de inicio' },
        { src: 'build/img/nissi-about.webp', caption: 'Sección sobre nosotros' },
        { src: 'build/img/nissi-products.webp', caption: 'Catálogo de productos' },
        { src: 'build/img/nissi-product.webp', caption: 'Detalle de un producto' },
        { src: 'build/img/nissi-galery1.webp', caption: 'Galería de fotos' }
      ]
    }
  }

  // DOM Elements
  const modal = document.getElementById('project-modal')
  const closeBtns = [document.getElementById('close-modal-btn'), document.getElementById('close-modal-dot')]
  const backdrop = document.querySelector('.project-modal-backdrop')

  // Details Elements
  const modalProjectName = document.getElementById('modal-project-name')
  const modalTitle = document.getElementById('modal-title')
  const modalBadge = document.getElementById('modal-badge')
  const modalDescription = document.getElementById('modal-description')
  const modalTechChips = document.getElementById('modal-tech-chips')
  const modalFeaturesList = document.getElementById('modal-features-list')
  const modalLinks = document.getElementById('modal-links')

  // Carousel Elements
  const mainImg = document.getElementById('carousel-main-img')
  const prevBtn = document.getElementById('carousel-prev')
  const nextBtn = document.getElementById('carousel-next')
  const counter = document.getElementById('carousel-counter')
  const caption = document.getElementById('carousel-caption')
  const indicatorsContainer = document.getElementById('carousel-indicators')

  let currentProject = null
  let currentImageIndex = 0

  // Attach click events to project cards
  const openBtns = document.querySelectorAll('.project-details-btn')
  openBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault()
      const projectId = btn.getAttribute('data-project')
      openModal(projectId)
    })
  })

  // Close Modal Events
  closeBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', closeModal)
  })
  if (backdrop) backdrop.addEventListener('click', closeModal)

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeModal()
    }
    if (e.key === 'ArrowLeft' && modal.classList.contains('show')) {
      prevImage()
    }
    if (e.key === 'ArrowRight' && modal.classList.contains('show')) {
      nextImage()
    }
  })

  // Carousel Events
  if (prevBtn) prevBtn.addEventListener('click', prevImage)
  if (nextBtn) nextBtn.addEventListener('click', nextImage)

  function openModal(projectId) {
    currentProject = projectsData[projectId]
    if (!currentProject) return

    // Populate text data
    modalProjectName.textContent = projectId + '.view'
    modalTitle.textContent = currentProject.title
    modalBadge.textContent = currentProject.badge
    modalDescription.innerHTML = `<p>${currentProject.description}</p>`

    // Populate Tech Stack
    modalTechChips.innerHTML = currentProject.technologies
      .map(
        tech => `
            <span class="tech-chip ${tech.deg}">
                <i class="${tech.icon}"></i> ${tech.label}
            </span>
        `
      )
      .join('')

    // Populate Features
    modalFeaturesList.innerHTML = currentProject.features
      .map(
        feature => `
            <li><i class="fa-solid fa-check"></i> ${feature}</li>
        `
      )
      .join('')

    // Populate Links
    let linksHTML = ''
    if (currentProject.links.demo) {
      linksHTML += `<a class="visit-site-button visit-site" target="_blank" href="${currentProject.links.demo}">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Ver Sitio
            </a>`
    }
    if (currentProject.links.github) {
      linksHTML += `<a class="visit-site-button github" target="_blank" href="${currentProject.links.github}">
                <i class="fa-brands fa-github"></i> GitHub
            </a>`
    }
    modalLinks.innerHTML = linksHTML

    // Initialize Carousel
    currentImageIndex = 0
    updateCarousel()

    // Show Modal
    document.body.style.overflow = 'hidden' // Prevent scrolling on body
    modal.classList.add('show')
  }

  function closeModal() {
    modal.classList.remove('show')
    document.body.style.overflow = ''
  }

  function updateCarousel() {
    if (!currentProject || !currentProject.images.length) return

    const imgData = currentProject.images[currentImageIndex]

    // Hide image to trigger fade
    mainImg.style.opacity = '0'
    setTimeout(() => {
      mainImg.src = imgData.src
      mainImg.alt = imgData.caption
      mainImg.style.opacity = '1'
    }, 150)

    caption.textContent = imgData.caption
    counter.textContent = `${currentImageIndex + 1} / ${currentProject.images.length}`

    // Create Indicators
    indicatorsContainer.innerHTML = currentProject.images
      .map(
        (img, index) => `
            <button class="indicator-dot ${index === currentImageIndex ? 'active' : ''}" 
                    data-index="${index}" 
                    aria-label="Ir a imagen ${index + 1}"></button>
        `
      )
      .join('')

    // Attach indicator events
    const dots = indicatorsContainer.querySelectorAll('.indicator-dot')
    dots.forEach(dot => {
      dot.addEventListener('click', e => {
        currentImageIndex = parseInt(e.target.getAttribute('data-index'))
        updateCarousel()
      })
    })

    // Toggle buttons if only 1 image
    if (currentProject.images.length <= 1) {
      prevBtn.style.display = 'none'
      nextBtn.style.display = 'none'
      indicatorsContainer.style.display = 'none'
    } else {
      prevBtn.style.display = 'flex'
      nextBtn.style.display = 'flex'
      indicatorsContainer.style.display = 'flex'
    }
  }

  function prevImage() {
    if (!currentProject || currentProject.images.length <= 1) return
    currentImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length
    updateCarousel()
  }

  function nextImage() {
    if (!currentProject || currentProject.images.length <= 1) return
    currentImageIndex = (currentImageIndex + 1) % currentProject.images.length
    updateCarousel()
  }
})
