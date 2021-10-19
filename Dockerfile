FROM node:14.13.0

WORKDIR /myapp
ADD . /myapp

RUN npm init -y
RUN npm install


CMD [ "npm", "run", "dev" ]
