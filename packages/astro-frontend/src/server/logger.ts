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

const logFormat = (
  msg: string,
  timestamp: string,
  level: string,
  { correlationId }: LoggerMetadata
) => {
  const correlationLogPart = correlationId ? `[CID=${correlationId}]` : undefined

  const firstPart = [timestamp, level.toUpperCase()].filter((e) => e !== undefined).join(' ')

  const secondPart = [correlationLogPart].filter((e) => e !== undefined).join(' ')

  return `${firstPart} - ${secondPart} ${msg}`
}

export const customFormat = () =>
  winston.format.printf(({ level, message, timestamp, ...meta }) => {
    const clearMessage =
      typeof message === 'object' ? JSON.stringify(message, bigIntReplacer) : message
    const lines = (clearMessage ?? '')
      .toString()
      .split('\n')
      .map((line: string) =>
        logFormat(line, timestamp as string, level, meta.loggerMetadata as LoggerMetadata)
      )
    return lines.join('\n')
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
      winston.format.json(),
      winston.format.errors({ stack: true }),
      customFormat()
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

export const genericLogger = logger({})
