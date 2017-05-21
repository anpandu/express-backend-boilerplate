require('dotenv').config()

const config = {
  server: {},
  logger: {
    isFile: process.env.PAPERTRAIL_IS_FILE || 'false',
    isPapertrail: process.env.PAPERTRAIL_IS_FILE || 'false',
    papertrail: {
      host: process.env.PAPERTRAIL_HOST || 'host',
      port: process.env.PAPERTRAIL_PORT || 'port',
    },
  }
}

module.exports = config