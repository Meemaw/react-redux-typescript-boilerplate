FROM node:12-alpine

RUN apk add --no-cache bash

ADD package-lock.json /package-lock.json
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

WORKDIR /app
ADD ./src /app/src
ADD ./*.json /app/
ADD ./package-lock.json /app
ADD ./public /app/public
ADD ./scripts /app/scripts
RUN npm ci

EXPOSE 3000
EXPOSE 35729

ENTRYPOINT ["/bin/bash", "/app/scripts/run.sh"]
CMD ["start"]
