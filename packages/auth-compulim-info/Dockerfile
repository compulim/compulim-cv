FROM node:alpine AS builder
WORKDIR /builder/
ADD . /builder/
RUN npm install
RUN npm run build

FROM node:alpine
LABEL name="auth-compulim-info" version="1.0.0"
EXPOSE 4003
ENTRYPOINT node lib
WORKDIR /webapp/
COPY --from=0 /builder/ /webapp/
