const { app } = require('./app');

// Models
const { Repair } = require('./models/reparir.model');
const { User } = require('./models/user.model');

// Utils // conected a bd
const { db } = require('./utils/database');

// Authenticate database credentials
db.authenticate()
  .then(() => console.log('DB authenticated '))
  .catch(err => console.log(err));

// establish model relations

// 1 User <---> M Post
// User.hasMany(Post, { foreignKey: 'userId' });

User.hasMany(Repair);
Repair.belongsTo(User);

//{ force: true }
db.sync()
  .then(() => console.log('Databe synced'))
  .catch(err => console.log(err));

// Spin to server
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(` Express app running on port!!: ${PORT}`);
});
