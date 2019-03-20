FROM node:8

WORKDIR /home/node/app

COPY . /home/node/app

ENV NODE_PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
