# Interoperability Public Monorepo

## Get started

To get started, you will need:

- Node.js (https://nodejs.org/en/download/package-manager)
- pnpm (https://pnpm.io/installation)
- Docker (for local development, https://www.docker.com/get-started/)

Then install the dependencies with

```
pnpm install
```

## First run

After installing dependencies you will need to build both the commons and models's packages.

Ensure that you are at root level in the project, then run:

```
pnpm build
```

This will build all the packages in packages/.

Otherwise, you can go into a specific package folder and run it there. Or:

```
pnpm -w install
```

(this will always run the root level scripts in the corresponding package.json)

## Run a single service in watch mode

```
pnpm start:<service-name>
# example: pnpm start:astro-fe
```

## Building and running docker containers

A docker-compose.yml is provided in the `docker` folder.

Currently it provides two services: a PostgreSQL instance and a pg-admin Web GUI to interface it, available at: http://localhost:8082 .

From root you have these package.json scripts available:

- `pnpm run infra:start`: will update the containers and start them
- `pnpm run infra:stop`: will stop the containers
- `pnpm run infra:destroy`: will delete the containers

## Run tests

```
pnpm test
```
