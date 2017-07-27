FROM node:8.2.1-alpine
RUN mkdir /app
WORKDIR /app
COPY ./www /app/www
COPY server.js /app
RUN npm install express
EXPOSE 8080
CMD ["node", "server.js"]
