const { app } = require('./app');

// Utils // conected a bd
const { db } = require('./utils/database');

db.authenticate()
  .then(() => console.log('DB authenticated '))
  .catch(err => console.log(err));

//{ force: true }
db.sync()
  .then(() => console.log('Databe synced'))
  .catch(err => console.log(err));

// Spin to server
const PORT = 4001;

app.listen(PORT, () => {
  console.log(` Express app running on port!!: ${PORT}`);
});
