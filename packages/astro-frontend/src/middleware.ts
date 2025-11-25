import { defineMiddleware } from "astro:middleware";
import { logger } from "./server/logger";

export const onRequest = defineMiddleware(async (context, next) => {
  const correlationId = crypto.randomUUID();
  context.locals.correlationId = correlationId;

  const loggerInstance = logger({ correlationId });
  const isStatusCall = context.request.url.endsWith("/api/status");

  const requestMsg = `Request ${context.request.method} ${context.request.url}`;
  if (isStatusCall) {
    loggerInstance.debug(requestMsg);
  } else {
    loggerInstance.info(requestMsg);
  }

  context.locals.logger = loggerInstance;

  const response = await next();

  const responseMsg = `Response ${context.request.method} ${context.request.url} - Status: ${response.status}`;
  if (isStatusCall) {
    loggerInstance.debug(responseMsg);
  } else {
    loggerInstance.info(responseMsg);
  }

  return response;
});
