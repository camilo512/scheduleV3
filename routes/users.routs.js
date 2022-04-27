const express = require('express');

//Middlewear
const { userExists } = require('../middlewares/users.middlewares');

// Controller
const {
  getAllUsers,
  createUser,
  getUsersId,
  updateUser,
  deleteUser,
} = require('../controller/user.controller');

const router = express.Router();

//http://localhost:4001/api/v1/users
router.get('/', getAllUsers);
router.post('/', createUser);
//http://localhost:4001/api/v1/users/id
// router.get('/:id', getUsersId);
// router.patch('/:id', updateUser );
// router.delete('/:id', deleteUser );
router
  .route('/:id')
  .get(userExists, getUsersId)
  .patch(userExists, updateUser)
  .delete(userExists, deleteUser);

module.exports = { usersRouter: router };
