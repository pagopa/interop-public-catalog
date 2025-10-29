import { defineMiddleware } from 'astro:middleware'
import { logger } from './server/logger'

export const onRequest = defineMiddleware(async (context, next) => {
  const correlationId = crypto.randomUUID()
  context.locals.correlationId = correlationId

  const loggerInstance = logger({ correlationId })
  const msg = `Request ${context.request.method} ${context.request.url}`

  if (context.request.url.endsWith('/api/status')) {
    loggerInstance.debug(msg)
  } else {
    loggerInstance.info(msg)
  }

  context.locals.logger = loggerInstance

  const response = await next()

  loggerInstance.info(
    `Response ${context.request.method} ${context.request.url} - Status: ${response.status}`
  )

  return response
})
