// Require necessary NPM packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Require the job resource routes and controllers
const clientController = require('./controllers/clients');
const userController = require('./controllers/users');

// Instantiate express application object
const app = express();

// The `.use` method sets up middleware in Express

// Set up cors middleware and make sure that it
// comes before our routes are used.
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Configure the route middleware
app.use('/api/clients', clientController);
app.use('/api', userController);

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	res.status(statusCode).send(message);
});

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
	console.log('listening on port ' + app.get('port'));
});
