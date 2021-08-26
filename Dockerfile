FROM node:12

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ENV NODE_OPTIONS=--max_old_space_size=5120


# container listens on the three default expo.io ports
EXPOSE 19002
EXPOSE 19001
EXPOSE 19000

RUN npm install -g expo-cli@4.4.9 && npm cache clean --force

# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /app && chown node:node /app
WORKDIR /app
# the official node image provides an unprivileged user as a security best practice
# but we have to manually enable it. We put it here so npm installs dependencies as the same
# user who runs the app.
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
USER node
COPY --chown=node:node ./package.json ./package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force
ENV PATH /app/node_modules/.bin:$PATH

# copy in our source code last, as it changes the most
# copy in as node user, so permissions match what we need
COPY --chown=node:node . .

# do expo login
ENTRYPOINT ["./docker-entrypoint.sh"]

CMD [ "npm", "start" ]