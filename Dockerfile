FROM node:current-alpine AS build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY static static
COPY src src
COPY postcss.config.js .
COPY svelte.config.js .
COPY tailwind.config.js .
COPY tsconfig.json .
COPY vite.config.ts .

RUN npm run build

FROM alpine:latest AS prod

WORKDIR /app

RUN rm -rf ./*

COPY --from=build /app/build .

ENTRYPOINT [ "tail", "-f", "/dev/null" ]
