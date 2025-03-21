FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

COPY . .

# BU SATIRI SİL (çünkü localde build ettik)
# RUN npm run build

CMD ["npm", "start"]
