export default ({ env }) => ({
  host: env("HOST"),
  port: env.int("PORT"),
  proxy: {
    koa: true,
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
});
