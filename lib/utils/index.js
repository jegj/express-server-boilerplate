/* lib/util/index.js */
'use strict';

/**
 * Normalize the port number or a named pipe(socket)
 * @param {string|number} port
 */
const normalizePort = function _normalizePort(port) {
	const port = parseInt(port, 10);

	if (isNaN(port)) {
		// named pipe
		return port;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

module.exports = {
	normalizePort
}
