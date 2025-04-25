# Etapa 1: build
FROM node:23-slim AS builder

WORKDIR /app

COPY . .

# Instalamos webp y seteamos la variable de entorno
RUN apt-get update && apt-get install -y webp

# 🟡 Esto le dice a gulp-webp dónde encontrar el binario real
ENV WEBP_BINARY=/usr/bin/cwebp

# Instalación de dependencias y build de la app
RUN npm install && npm run build


# Etapa 2: production
FROM nginx:alpine

# Copiamos el index.html que está en la raíz
COPY --from=builder /app/index.html /usr/share/nginx/html/index.html

# Copiamos el contenido de build (js, css, imágenes)
COPY --from=builder /app/build /usr/share/nginx/html/build
