# --- Step 1: Build stage ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Build app
RUN npm run build

# --- Step 2: Production stage ---
FROM node:20-alpine

WORKDIR /app

# Copy only the build output
COPY --from=builder /app ./

# Install only production dependencies
RUN npm install --omit=dev

EXPOSE 3000
CMD ["npm", "start"]
