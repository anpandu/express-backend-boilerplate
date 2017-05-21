const CONFIG = require('./config')
const winston = require('winston')
const Papertrail = require('winston-papertrail').Papertrail

var loggerConfig = {
  transports: [
    new (winston.transports.Console)(),
    
  ]
}

if (CONFIG.logger.isFile) {
  loggerConfig.transports
    .append(new (winston.transports.File)({ filename: '/tmp/news-scrape.log' }))
}

if (CONFIG.logger.isPapertrail) {
  loggerConfig.transports
    .append(new Papertrail({
      host: CONFIG.papertrail.host,
      port: CONFIG.papertrail.port,
      colorize: true
    }))
}

const logger = new (winston.Logger)(loggerConfig)

const logSaveSuccess = (e) => logger.info(`[${e}] saved successfully`)

module.exports = {
  'logger': logger,
  'logSaveSuccess': logSaveSuccess,
}