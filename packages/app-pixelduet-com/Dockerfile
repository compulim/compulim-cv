FROM node:alpine AS builder
WORKDIR /builder/
ADD . /builder/
RUN npm install
RUN npm run build

FROM node:alpine
LABEL name="app-pixelduet-com" version="1.0.0"
ENV PORT=4002
EXPOSE 4002
ENTRYPOINT npx --no-install serve .
WORKDIR /webapp/
RUN npm install serve -g
COPY --from=0 /builder/build/ /webapp/
