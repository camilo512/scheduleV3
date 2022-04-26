const express = require('express');

// Routers
const { usersRouter } = require('./routes/users.routs');
const { repairsRouter } = require('./routes/repairs.routs');

// Utils // conected a bd
const { db } = require('./utils/database');

// init express app
const app = express();

db.authenticate()
  .then(() => console.log('DB authenticated '))
  .catch(err => console.log(err));

//{ force: true }
db.sync()
  .then(() => console.log('Databe synced'))
  .catch(err => console.log(err));

// Enable incoming JSON data
app.use(express.json());

// Endpoints
//http://localhost:4001/api/v1/users
app.use('/api/v1/users', usersRouter);

//http://localhost:4001/api/v1/repairs
app.use('/api/v1/repairs', repairsRouter);

// Spin to server
const PORT = 4001;

app.listen(PORT, () => {
  console.log(` Express app running on port!!: ${PORT}`);
});
