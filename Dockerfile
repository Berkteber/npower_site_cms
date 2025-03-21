FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

ENV NODE_OPTIONS="--max-old-space-size=2048"

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]
