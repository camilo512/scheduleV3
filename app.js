const express = require('express');

// Routers
const { usersRouter } = require('./routes/users.routs');
const { repairsRouter } = require('./routes/repairs.routs');

// init express app
const app = express();

// Enable incoming JSON data
app.use(express.json());

// Endpoints
//http://localhost:4001/api/v1/users
app.use('/api/v1/users', usersRouter);

//http://localhost:4001/api/v1/repairs
app.use('/api/v1/repairs', repairsRouter);

module.exports = { app };
