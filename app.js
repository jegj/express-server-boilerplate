/* index.js */
'use strict';

require('dotenv').config();
require('app-module-path').addPath(__dirname);

const express = require('express');
const cors = require('cors');
const rateLimit = require("express-rate-limit");

const app = express();

const indexRouter = require('./routers/index');
const usersRouter = require('./routers/users');

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
