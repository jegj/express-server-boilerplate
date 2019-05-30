/* index.js */
'use strict';

require('dotenv').config();
require('app-module-path').addPath(__dirname);

const express = require('express');
// const cors = require('cors');
// const rateLimit = require("express-rate-limit");
// const bodyParser = require('body-parser');

const usersRouter = require('./routers/users');
const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Disable powered header
app.disable('x-powered-by');

// Enable cors
// https://www.npmjs.com/package/cors
// app.use(cors());

// Only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// https://expressjs.com/es/guide/behind-proxies.html
// app.enable('trust proxy', false);

// Disabled by default, “/foo” and “/foo/” are treated the same by the router.
// app.set('strict routing', false);

// Create rate limiter
// https://www.npmjs.com/package/express-rate-limit
// app.use(limiter);

// Loading routers
app.use('/api/v1/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
