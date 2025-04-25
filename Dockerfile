FROM node:18-alpine

RUN npm install -g live-server

WORKDIR /app

CMD ["live-server", "--host=0.0.0.0", "--port=80", "--watch=."]