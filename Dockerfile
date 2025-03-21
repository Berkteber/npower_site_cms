FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

# Önbellek sorunlarını önlemek için temizle
RUN rm -rf .cache node_modules/.cache

COPY . .

ENV NODE_OPTIONS="--max-old-space-size=1024"

RUN npm run build

CMD ["npm", "start"]
