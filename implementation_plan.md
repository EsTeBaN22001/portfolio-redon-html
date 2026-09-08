# Plan de Implementación: Modal Flotante de Proyectos con Carrusel y Detalles

## Objetivo
Agregar a cada tarjeta de proyecto una acción para abrir un **Modal Flotante Glassmorphic**, donde el usuario pueda:
1. Navegar por un **carrusel de múltiples imágenes reales del proyecto** (pantalla principal, login, vistas internas, etc.).
2. Leer una **sección de información extendida** que explique el propósito del proyecto, las tecnologías aplicadas, las características clave y enlaces directos a la demo y repositorio.
3. Mantener la misma estética *dark glassmorphism*, acentos luminosos en azul/cyan y estilo de ventana estilo IDE/terminal.

---

## 1. Diseño del Botón en las Tarjetas de Proyecto
En cada una de las 6 tarjetas de proyecto (`fotaza`, `trelloclon`, `equizzy`, `uptask`, `appsalon`, `nissi`):
- Se agregará un botón destacado:
  ```html
  <button type="button" class="project-details-btn" data-project="fotaza">
    <i class="fa-solid fa-images"></i> Ver Galería y Detalles
  </button>
  ```
- Este botón se ubica en el contenedor de texto de la tarjeta, con estilo glass neón (`background: rgba(83, 127, 231, 0.12)`, borde luminoso `rgba(83, 127, 231, 0.35)` y hover con elevación).

---

## 2. Componente del Modal Flotante (`#project-modal`)
Estructura semántica incorporada al final de `index.html`:
- **Backdrop Overlay**: Fondo oscuro con desenfoque de fondo (`rgba(0, 0, 0, 0.85)`, `backdrop-filter: blur(14px)`).
- **Ventana estilo Terminal/IDE**:
  - Encabezado con botones macOS (rojo = cerrar, amarillo, verde), pestaña de archivo interactiva (`nombre-proyecto.view`) y botón de cerrar `×`.
  - **Grid Interno en 2 Secciones** (apilado en móvil y tablet vertical):
    - **Sección Izquierda / Superior (Carrusel de Imágenes)**:
      - Visor de imagen activa con transición suave.
      - Botones de navegación Anterior (`<`) y Siguiente (`>`) con diseño glass translúcido.
      - Contador de imágenes (`1 / 4`) y miniaturas/indicadores de posición clickeables.
      - Título/pie de imagen descriptivo de la pantalla actual.
    - **Sección Derecha / Inferior (Detalles Técnicos)**:
      - Título del proyecto + Badge de categoría (*Social Media*, *Booking System*, etc.).
      - Descripción ampliada del proyecto y los retos resueltos.
      - Lista de tecnologías y herramientas aplicadas (*chips* luminosos).
      - Lista de funcionalidades principales con íconos de verificación (`fa-check`).
      - Botones directos a la demo en vivo (`Ver Sitio`) y código fuente (`GitHub`).

---

## 3. Base de Datos en JavaScript (`projects-modal.js`)
Se creará un script dedicado `src/js/projects-modal.js` y se compilará en `build/js/projects-modal.js`:
- Objeto estructurado con los datos de los 6 proyectos.
- Imágenes ya presentes en `build/img/`:
  - **AppSalon**: `appsalon-index.webp`, `appsalon-login.webp`, `appsalon-dateInfo.webp`, `appsalon-summary.webp`.
  - **UpTask**: `uptask-tasks.webp`, `uptask-index.webp`, `uptask-createProyect.webp`, `uptask-login.webp`, `uptask-profile.webp`.
  - **EquizzyApp**: `equizzy-index.webp`, `equizzy-login.webp`, `equizzy-respond.webp`.
  - **Nissi Confecciones**: `nissi-index.webp`, `nissi-products.webp`, `nissi-product.webp`, `nissi-galery1.webp`, `nissi-about.webp`.
  - **TrelloClon**: `trelloclon-index.webp`.
  - **Fotaza**: `fotaza-index.webp`.
- Control de navegación por teclado (flechas izquierda/derecha para carrusel, `Escape` para cerrar modal), clicks fuera del modal y bloqueo de scroll en el body mientras está abierto.

---

## 4. Estilos SCSS (`_proyects.scss` y `_cards.scss`)
- Se agregarán los estilos del modal flotante, animaciones de entrada (`fadeInScale`), visor del carrusel, flechas de navegación e indicadores luminosos, integrados en `src/scss/index/_proyects.scss` y compilados en `build/css/app.css`.

---

## Archivos a Modificar / Crear

#### [NEW] [src/js/projects-modal.js](file:///c:/laragon/www/portfolio-redon-html/src/js/projects-modal.js)
- Lógica del modal, datos de proyectos, carrusel de imágenes, controles y accesibilidad.

#### [NEW] [build/js/projects-modal.js](file:///c:/laragon/www/portfolio-redon-html/build/js/projects-modal.js)
- Archivo empaquetado para ejecución en el navegador.

#### [MODIFY] [index.html](file:///c:/laragon/www/portfolio-redon-html/index.html)
- Agregar el botón "Ver Galería y Detalles" en cada tarjeta de proyecto.
- Incorporar la estructura HTML del modal flotante al final del `<body>`.
- Vincular el script `projects-modal.js`.

#### [MODIFY] [src/scss/index/_proyects.scss](file:///c:/laragon/www/portfolio-redon-html/src/scss/index/_proyects.scss)
- Estilos para el botón de galería y el modal flotante con carrusel.

#### [MODIFY] [build/css/app.css](file:///c:/laragon/www/portfolio-redon-html/build/css/app.css)
- Integrar las nuevas reglas en la hoja de estilos activa.

---

## Plan de Verificación

1. **Prueba de apertura y cierre**: Abrir el modal desde cada uno de los 6 proyectos y verificar que cargue los datos correspondientes. Probar cierre con botón `×`, tecla `Escape` y click en el fondo.
2. **Prueba del carrusel**: En proyectos con múltiples imágenes (AppSalon, UpTask, Equizzy, Nissi), navegar con flechas anterior/siguiente y verificar cambio de imagen y contador.
3. **Prueba responsiva**: Validar visualización en escritorio (2 columnas en modal) y en móvil/tablet (columna única con scroll suave).
