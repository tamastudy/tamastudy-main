FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

RUN npm install pm2 pnpm -g

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install dependencies
RUN pnpm install --production

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN pnpm run build

EXPOSE 3000

CMD [ "pm2-runtime", "start", "pnpm", "--", "start" ]