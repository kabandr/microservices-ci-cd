FROM node:12.18.3-alpine

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . ./

EXPOSE 4000
CMD ["yarn", "start"]
