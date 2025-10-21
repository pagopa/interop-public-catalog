#default value for compatibility
ARG NODE_REGISTRY="docker.io"

FROM ${NODE_REGISTRY}/node:20.19.4-slim@sha256:ef358d9fa0734e2c3b42482aa352c28a59245bc3d32e07ef57810cf8ba9092c5 AS build

RUN corepack enable

WORKDIR /app
COPY package.json /app/
COPY pnpm-lock.yaml /app/
COPY pnpm-workspace.yaml /app/
COPY .npmrc /app/

COPY ./packages/astro-frontend/package.json /app/packages/astro-frontend/package.json
COPY ./packages/commons/package.json /app/packages/commons/package.json
COPY ./packages/models/package.json /app/packages/models/package.json
COPY ./packages/strapi/package.json /app/packages/strapi/package.json

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY tsconfig.json /app/
COPY turbo.json /app/

COPY ./packages/astro-frontend /app/packages/astro-frontend
COPY ./packages/commons /app/packages/commons
COPY ./packages/models /app/packages/models
COPY ./packages/strapi /app/packages/strapi

RUN pnpm build && \
  rm -rf /app/node_modules/.modules.yaml && \
  rm -rf /app/node_modules/.cache && \
  mkdir /out && \
  cp -a --parents -t /out \
  node_modules packages/astro-frontend/node_modules \
  package*.json packages/astro-frontend/package*.json \
  packages/commons \
  packages/models \
  packages/strapi \
  packages/astro-frontend/dist && \
  find /out -exec touch -h --date=@0 {} \;

FROM ${NODE_REGISTRY}/node:20.19.4-slim@sha256:ef358d9fa0734e2c3b42482aa352c28a59245bc3d32e07ef57810cf8ba9092c5 AS final

COPY --from=build /out /app

RUN groupadd -r app && useradd -rm -g app app
RUN chown -R app:app /app && chmod -R 700 /app
USER app

WORKDIR /app/packages/astro-frontend

EXPOSE 8080

CMD ["node", "./dist/server/entry.mjs"]
