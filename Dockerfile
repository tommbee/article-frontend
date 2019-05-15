FROM node:8

ENV USER=app

ENV SUBDIR=appDir

RUN useradd --user-group --create-home --shell /bin/false $USER &&\
    npm install --global tsc-watch npm ntypescript typescript concurrently

ENV HOME=/home/$USER

COPY . $HOME/$SUBDIR/

RUN mkdir -p $HOME/$SUBDIR/dist
RUN chown -R $USER:$USER $HOME/*

USER $USER

WORKDIR $HOME/$SUBDIR

RUN npm install
RUN npm run build

CMD ["npm", "start"]
