FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
ENV PORT=5000
EXPOSE $PORT
CMD ["node", "index.js"]