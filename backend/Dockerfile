FROM node:20-alpine
WORKDIR /backend

# Copy package.json + yarn.lock
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy source code
COPY . .

EXPOSE 3000
CMD ["yarn", "start:dev"]


