# app/Dockerfile
FROM node:22

WORKDIR /app
COPY . .

RUN npm install --legacy-peer-deps

EXPOSE 8080
CMD ["npm", "run", "serve"]
