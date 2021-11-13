FROM node:16-alpine as builder
WORKDIR /build
COPY package.json package-lock.json README.md LICENSE rollup.config.js ./
COPY src ./src/
COPY public ./public/
RUN npm install \
  && npm run build

FROM nginx:alpine
COPY --from=builder /build/public  /usr/share/nginx/html/