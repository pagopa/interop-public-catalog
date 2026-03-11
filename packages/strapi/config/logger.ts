"use strict";

/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
const {
  winston,
  formats: { prettyPrint, levelFilter },
} = require("@strapi/logger");
/* eslint-enable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */

const ignoreHealthCheckLogs = winston.format((info) => {
  if (
    typeof info.message === "string" &&
    info.message.includes("GET /_health")
  ) {
    return false;
  }
  return info;
});

export default {
  transports: [
    new winston.transports.Console({
      level: "http",
      format: winston.format.combine(
        ignoreHealthCheckLogs(),
        levelFilter("http"),
        prettyPrint({ timestamps: "YYYY-MM-DD hh:mm:ss.SSS" }),
      ),
    }),
  ],
};
