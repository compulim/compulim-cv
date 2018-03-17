FROM node:alpine
LABEL name="server" version="1.0.0"
WORKDIR /webapp/
ADD . /webapp/
RUN npm install
RUN npm run build
EXPOSE 80
ENV PORT=80
ENTRYPOINT node .
