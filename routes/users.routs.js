const express = require('express');

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
router.route('/:id').get(getUsersId).patch(updateUser).delete(deleteUser);

module.exports = { usersRouter: router };
