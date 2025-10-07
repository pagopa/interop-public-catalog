// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default ({ env }) => ({
  host: env("HOST"),
  port: env.int("PORT"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
