FROM node:10.16.0-alpine AS dependencies

WORKDIR /www

COPY package.json ./package.json
RUN npm install

FROM node:10.16.0-alpine
# a place to put our app: create if not exist
WORKDIR /www

COPY --from=dependencies /www/node_modules node_modules
COPY ./ ./
ADD docker/run.sh ./run.sh
RUN chmod +x ./run.sh
RUN apk add bash

ADD https://github.com/kelseyhightower/confd/releases/download/v0.10.0/confd-0.10.0-linux-amd64 /usr/local/bin/confd
RUN chmod +x /usr/local/bin/confd
ADD docker/etc/confd /etc/confd

# bind to port 8080
EXPOSE 3000

CMD ["node","bin/www"]
#CMD tail -f /dev/null
