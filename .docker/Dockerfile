FROM node:12-alpine
WORKDIR /app
COPY package* .
RUN npm i

COPY . .

USER node
EXPOSE 3000
CMD ["npm","run","prod"]