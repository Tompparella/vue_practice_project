FROM node:14-alpine

WORKDIR /vue_app

EXPOSE 8000

CMD [ "npm", "run", "serve" ]