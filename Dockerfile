FROM node:20-slim
RUN corepack enable

# Set working directory
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN pnpm install --prod

# Copy source files
COPY . .

# Build app
RUN pnpm run build

# Run the app
CMD [ "pnpm", "start" ]

