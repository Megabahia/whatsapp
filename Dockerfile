ARG is_dev=true

#Download base image ubuntu 16.04
FROM node:16.15.0-stretch-slim

#Mainterner
LABEL MAINTAINER="PapagayoDev"


# install dependencies
WORKDIR /var/www/html/project_name
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# set .env.local
ARG dotenv=.env.local
ADD $dotenv .env

# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY . /var/www/html/project_name

# TypeScript
RUN npm run build

# set application time zone
ENV TZ="America/Guayaquil"

EXPOSE 3001

CMD [ "npm", "run", "start" ]
