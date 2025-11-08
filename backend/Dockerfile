# backend/Dockerfile
FROM node:18-alpine

WORKDIR /app

RUN npm init -y
RUN npm install express morgan

COPY index.js ./

EXPOSE 3000

CMD ["node", "index.js"]
