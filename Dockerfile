FROM node:latest

WORKDIR /myapp
ADD . /myapp

RUN npm init -y
RUN npm install --save react react-dom next
RUN npm install

CMD [ "npm", "run", "dev" ]
