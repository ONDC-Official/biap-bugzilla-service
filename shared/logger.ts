import pino from 'pino'
import expressPino from 'pino-http'

export const logger = pino({
  level: 'info',
})

export const expressLogger = expressPino({
  logger,
})
