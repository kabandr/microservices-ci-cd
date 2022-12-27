FROM node:18.12.1-alpine3.16

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./

EXPOSE 4000
CMD ["npm", "start"]
