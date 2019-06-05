/* lib/types/httptypes.js */

module.exports = {
	/* 2xx */
	OK: 'Ok',
	CREATED: 'Created',
	ACCEPTED: 'Accepted',
	NO_CONTENT: 'NoContent',
	RESET_CONTENT: 'ResetContent',
	partialContent: 'PartialContent',
	/* 3XX */
	notModified: 'NotModified',
	temporaryRedirect: 'Temporary Redirect',
	/* 4XX */
	badRequest:  'BadRequest',
	unauthorized: 'Unauthorized',
	paymentRequired: 'PaymentRequired',
	forbidden: 'Forbidden',
	notFound: 'NotFound',
	methodNotAllowed: 'MethodNotAllowed',
	notAcceptable: 'NotAcceptable',
	proxyAuthenticationRequired: 'ProxyAuthenticationRequired',
	RequestTimeout: 'requestTimeout',
	conflict: 'Conflict',
	/* 5XX */
	SERVER_ERROR: 'ServerError',
	notImplemented: 'NotImplemented',
	badGateway: 'BadGateway',
	serviceUnavailable: 'ServiceUnavailable',
	gatewayTimeout: 'GatewayTimeout',
};
