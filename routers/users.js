/* routers/com/index.js */
'use strict';

const { createRouter } = require('lib/router');
const JSONValidator = require('lib/jsonvalidator');
// const RX = require('../../../../index').ReqValidator;
const schema1 = require('schemas/users/schema1.json');
// const cc = require('controllers/dummy');

const jsonvalidator = new JSONValidator(
	[ schema1 ],
	{ allErrors: true, jsonPointers: true }
);

const authorization = {};

const UsersRouter = function createrUsersRouter( { LOGGER, expRouterOpts = {} }){
	const routes = [
		// Route
		{
			method:           'get',
			path:             '/',
			rprivs:           [],
			rheaders:         [],
			controller:       [],
			// name:             'users' // Optional just for debugging purpose
		}
	];
	return createRouter(routes, { LOGGER, expRouterOpts, jsonvalidator, authorization})
}

module.exports = UsersRouter;
