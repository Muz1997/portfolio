From node:18-alpine
WORKDIR /app
COPY package.json package.json
RUN apk update
RUN apk add git
RUN npm install --legacy-peer-deps
RUN git clone https://github.com/Muz1997/portfolio.git
CMD  ["npm","run","dev"]