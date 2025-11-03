/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { LoggerConfig } from 'pagopa-interop-public-commons'
import winston from 'winston'

export function bigIntReplacer(_key: string, value: unknown): unknown {
  if (typeof value === 'bigint') {
    return value.toString()
  }
  return value
}

export type LoggerMetadata = {
  correlationId?: string
}

export const parsedLoggerConfig = LoggerConfig.safeParse(process.env)
const config: LoggerConfig = parsedLoggerConfig.success
  ? parsedLoggerConfig.data
  : {
      logLevel: 'info',
    }

const MESSAGE = Symbol.for('message')
const lineFormat = winston.format((info) => {
  const cid = ((info.loggerMetadata as Record<string, unknown>)?.correlationId ??
    info.correlationId) as string | undefined

  const head = [info.timestamp, info.level?.toUpperCase()].filter(Boolean).join(' ')
  const cidPart = cid ? `[CID=${cid}] ` : ''
  const text =
    typeof info.message === 'object'
      ? JSON.stringify(info.message, bigIntReplacer)
      : String(info.message ?? '')

  info[MESSAGE] = `${head} - ${cidPart}${text}`
  return info
})

const getLogger = () =>
  winston.createLogger({
    level: config.logLevel,
    transports: [
      new winston.transports.Console({
        stderrLevels: ['error'],
        forceConsole: true,
      }),
    ],
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.errors({ stack: true }),
      lineFormat()
    ),
    silent: process.env.NODE_ENV === 'test',
  })

const internalLoggerInstance = getLogger()

export const logger = (loggerMetadata: LoggerMetadata) => ({
  isDebugEnabled: () => internalLoggerInstance.isDebugEnabled(),
  debug: (msg: (typeof internalLoggerInstance.debug.arguments)[0]) =>
    internalLoggerInstance.debug(msg, { loggerMetadata }),
  info: (msg: (typeof internalLoggerInstance.info.arguments)[0]) =>
    internalLoggerInstance.info(msg, { loggerMetadata }),
  warn: (msg: (typeof internalLoggerInstance.warn.arguments)[0]) =>
    internalLoggerInstance.warn(msg, { loggerMetadata }),
  error: (msg: (typeof internalLoggerInstance.error.arguments)[0]) =>
    internalLoggerInstance.error(msg, { loggerMetadata }),
})

export type Logger = ReturnType<typeof logger>
