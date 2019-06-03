/* lib/logger/index.js */
'use strict';

const { createLogger, format, transports } = require('winston');
const { combine,simple, errors, colorize } = format;

// Configure Winston
const logger = createLogger({
  transports: [new transports.Console({
		format: combine(
			errors({ stack: true }),
			colorize(),
			simple()
		),
  })],
});


module.exports = logger;
