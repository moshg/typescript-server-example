FROM node:18.17 AS backend-builder
# FYI: https://github.com/pnpm/pnpm/issues/4495#issuecomment-1174023168
RUN npm install -g pnpm
USER node
WORKDIR /app
COPY --chown=node:node package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY --chown=node:node . .
RUN pnpm run build

FROM node:18.17-slim AS backend
USER node
WORKDIR /app
COPY --from=backend-builder /app/dist ./dist
CMD ["node", "dist/index.mjs"]
