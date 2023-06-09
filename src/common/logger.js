const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  transports: [new transports.Console()],
  format: format.combine(
    format.colorize(),
    format.simple(),
    format.json(),
    format.splat(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS',
    }),
    format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  exitOnError: false,
});

logger.stream = {
  write: (message) => {
    logger.info(message);
  },
};

module.exports = logger;
