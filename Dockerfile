FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

# Bellek sınırını artır ve eski cache’leri temizle
ENV NODE_OPTIONS=--max-old-space-size=1024

RUN rm -rf .cache node_modules/.cache

COPY . .

RUN npm run build

CMD ["npm", "start"]
