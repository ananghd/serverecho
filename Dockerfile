FROM node:20-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

# Copy only package metadata first to leverage Docker layer caching
COPY package*.json ./

# Install only production dependencies and clean npm cache to reduce image size
RUN npm install --omit=dev && npm cache clean --force

# Copy only the files needed at runtime
COPY index.js ./

ENV PORT=8080

EXPOSE 8080

CMD ["node", "index.js"]

