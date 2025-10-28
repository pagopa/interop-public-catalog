import { defineMiddleware } from 'astro:middleware'
import { logger } from '../../server/logger'

export const onRequest = defineMiddleware((context, next) => {
  const correlationId = crypto.randomUUID()
  context.locals.correlationId = correlationId

  const loggerInstance = logger({ correlationId })
  const msg = `Request ${context.request.method} ${context.request.url}`

  if (context.request.url === '/status') {
    loggerInstance.debug(msg)
  } else {
    loggerInstance.info(msg)
  }

  context.locals.logger = loggerInstance

  return next()
})
