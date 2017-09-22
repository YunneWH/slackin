FROM node:8.5
RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY index.js redirect.js ./
CMD node index.js
EXPOSE 3000
