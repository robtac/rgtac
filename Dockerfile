FROM node:10

# Set working directory
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build app
RUN npm run build

# Run the app
CMD [ "npm", "start" ]

