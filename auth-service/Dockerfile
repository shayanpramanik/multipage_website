FROM node:25-slim

WORKDIR /app
COPY . .

RUN npm init -y
RUN npm install express

CMD ["node", "app.js"]
