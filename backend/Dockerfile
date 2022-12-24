FROM node:12.18.3-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
COPY . ./

EXPOSE 4000
CMD ["npm", "start"]
