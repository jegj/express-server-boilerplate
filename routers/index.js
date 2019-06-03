/* routes/index.js */

function loadRouters( { app, LOGGER } ) {
	LOGGER.debug(`Loading routers...`);
	app.use( '/v1/users', require('./users')( { LOGGER, expRouterOpts: null }) );
	// app.use( '/v1/dummy', require('./users')() );
	// app.use( '/v1/dummy', require('./users')() );
	// app.use( '/v1/dummy', require('./users')() );
};

module.exports = loadRouters;
