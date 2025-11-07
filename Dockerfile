# ---------- Build stage ----------
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---------- Run stage ----------
FROM node:18-alpine
WORKDIR /app

# Install curl for debugging or health checks
RUN apk add --no-cache curl

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist
COPY .env ./

ENV NODE_ENV=production
ENV PORT=8080

# Run both frontend and backend
RUN npm install -g concurrently serve

CMD concurrently \
    "serve -s dist/client -l 8080" \
    "node dist/server/server.js"
