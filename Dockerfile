ARG HTTP_PROXY
ARG NO_PROXY

FROM node:lts as dependencies

ENV http_proxy ${HTTP_PROXY}
ENV https_proxy ${HTTP_PROXY}

ENV http_proxy http://172.28.5.171:8080
ENV https_proxy http://172.28.5.171:8080

RUN npm config set proxy http://172.28.5.171:8080
RUN npm config set https-proxy http://172.28.5.171:8080

WORKDIR /app
COPY package.json ./
RUN npm i

FROM node:lts as builder
WORKDIR /app
ENV http_proxy http://172.28.5.171:8080
ENV https_proxy http://172.28.5.171:8080

RUN npm config set proxy http://172.28.5.171:8080
RUN npm config set https-proxy http://172.28.5.171:8080
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /etc/resolv.conf ./docker/resolv.conf
RUN npm run build

FROM node:lts as runner
WORKDIR /app
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE ${NGINX_FRONTEND_PORT}
CMD ["npm", "start"]