# 1. Base image
FROM node:20-alpine

# 2. Working directory
WORKDIR /app

# 3. Copy package.json first (caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy source code
COPY . .

# 6. Set environment variable for WSL2 / Rollup HMR
ENV CHOKIDAR_USEPOLLING=true

# 7. Expose port
EXPOSE 3000

# 8. Start React
CMD ["npm", "run", "dev"]
