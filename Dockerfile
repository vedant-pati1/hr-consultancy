FROM node:18-alpine

WORKDIR /app
RUN npm intall -g pnpm
COPY package.json package-lock.json ./
RUN pnpm install
COPY . .
RUN pnpm run build

EXPOSE 3000
CMD ["pnpm", "start"]