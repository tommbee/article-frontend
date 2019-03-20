FROM node:8

WORKDIR /home/node/app

COPY . /home/node/app

ENV PORT=$PORT

EXPOSE $PORT

CMD ["npm", "start"]
