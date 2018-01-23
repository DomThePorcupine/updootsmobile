FROM node:9.4.0-slim
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY www/ ./dist
COPY server .
RUN npm install
CMD [ "npm", "start" ]
