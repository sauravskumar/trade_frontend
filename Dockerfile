FROM node
#RUN npm install
#RUN npm run build
RUN ls
RUN pwd
RUN npm install

ENV docker true

RUN npm run build
