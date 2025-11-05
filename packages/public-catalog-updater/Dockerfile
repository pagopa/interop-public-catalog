# Creating multi-stage build
FROM node:22-alpine AS build
RUN corepack enable

WORKDIR /opt/app

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./
COPY .npmrc ./

COPY packages/public-catalog-updater/package.json ./packages/public-catalog-updater/
COPY packages/models/package.json ./packages/models/

RUN pnpm install --frozen-lockfile

ENV PATH=/opt/app/node_modules/.bin:$PATH

COPY tsconfig.json ./
COPY turbo.json ./

COPY packages/public-catalog-updater/ ./packages/public-catalog-updater/
COPY packages/models/ ./packages/models/

RUN pnpm run build

# Creating final image
FROM node:22-alpine

RUN corepack enable
WORKDIR /opt/app
COPY --from=build --chown=node:node /opt/app ./
ENV PATH=/opt/app/node_modules/.bin:$PATH

USER node
EXPOSE 1337

CMD ["node", "packages/public-catalog-updater/dist/index.js"]
