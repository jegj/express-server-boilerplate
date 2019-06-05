/* lib/error/index.js */
'use strict';

const GenericRespond = require('lib/respond');
const HTTP_TYPES = require('lib/types/httptypes');
const HTTP_CODES = require('lib/types/httpcodes');

const AppError = GenericRespond.compose({
	props: {
		message: 'Unexpected Error',
		type: HTTP_TYPES.SERVER_ERROR,
		httpstatus : HTTP_CODES.SERVER_ERROR,
		options: {},
		operationalError: true
	},
	init({ }) {
		Error.call(this);
		Error.captureStackTrace(this);
	}
});

AppError.prototype.__proto__ = Error.prototype;

module.exports = AppError;
