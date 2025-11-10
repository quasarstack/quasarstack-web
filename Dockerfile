# ---------- Build stage ----------
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files and build the app
COPY . .
# Clean dist, build, and copy assets/env into dist
RUN npm run build

# ---------- Production stage ----------
FROM node:18-alpine
WORKDIR /app

# Install serve for serving the built app
RUN npm install -g serve

# Copy only necessary files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env ./

# Expose port
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

# Run the built app
CMD ["serve", "-s", "dist", "-l", "8080"]
