FROM node:alpine AS builder
WORKDIR /builder/
ADD . /builder/
RUN npm install
RUN npm run build

FROM node:alpine
LABEL name="app-compulim-info" version="1.0.0"
WORKDIR /webapp/
COPY --from=0 /builder/build/ /webapp/
EXPOSE 4001
ENV PORT=4001
ENTRYPOINT npx serve .
