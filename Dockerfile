FROM node
WORKDIR /var/app
COPY . ./
RUN yarn install