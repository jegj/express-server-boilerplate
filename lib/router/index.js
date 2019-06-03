/* lib/router/index.js */
'use strict';

const express = require('express');

const createRouter = ( routes = [], { LOGGER, expRouterOpts = {}, jsonvalidator = null, authorization = null } ) => {
	const newExpressRouter = new express.Router(expRouterOpts);
	routes.forEach(routerOpts => {
		LOGGER.debug(`Loading route ${routerOpts.name || '<UNAMED_ROUTER>'} ${routerOpts.method} ${routerOpts.path}...`);
		addRouter(
			routerOpts,
			{ router: newExpressRouter, LOGGER}
		);
	});
	return newExpressRouter;
};


const addRouter = (
	{ path = null, method = null, rheaders, rprivs, rschema, controller },
	{ router, LOGGER }
) => {

	// router =

}


module.exports = {
	createRouter,
	addRouter
};
