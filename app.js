const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

//Controllers

const { globalErrorHandler } = require('./controller/errors.controllers');

// Routers
const { usersRouter } = require('./routes/users.routs');
const { repairsRouter } = require('./routes/repairs.routs');

// init express app
const app = express();

// Enable CORS
app.use(cors());

// Enable incoming JSON data
app.use(express.json());

//Limit IP requests

const limiter = rateLimit({
  max: 10,
  windowMs: 60 * 1000,
  message: 'too many requests from this IP',
});

app.use(limiter);

// Endpoints
//http://localhost:4001/api/v1/users
app.use('/api/v1/users', usersRouter);

//http://localhost:4001/api/v1/repairs
app.use('/api/v1/repairs', repairsRouter);

// Global error handler
app.use('*', globalErrorHandler);

module.exports = { app };
