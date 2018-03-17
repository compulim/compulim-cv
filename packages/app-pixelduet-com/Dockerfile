FROM node:alpine AS builder
WORKDIR /builder/
ADD . /builder/
RUN npm install
RUN npm run build

FROM node:alpine
LABEL name="app-pixelduet-com" version="1.0.0"
WORKDIR /webapp/
COPY --from=0 /builder/build/ /webapp/
EXPOSE 4002
ENV PORT=4002
ENTRYPOINT npx serve .
