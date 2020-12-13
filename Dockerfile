FROM node:14.15.1-alpine3.12
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
COPY . ./
RUN yarn build

ENV PORT 80
ENV NODE_ENV production
EXPOSE 80
CMD ["yarn", "start:server"]
