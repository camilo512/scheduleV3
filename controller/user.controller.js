const { User } = require('../models/user.model');

// utils
const { catchAsync } = require('../utils/catchAsync');

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).json({
    users,
  });
});

const getUsersId = catchAsync(async (req, res, next) => {
  const { userId } = req;
  // const { id } = req.params;
  // const userId = await User.findOne({ where: { id } });

  res.status(200).json({
    userId,
  });
});

const createUser = catchAsync(async (req, res, next) => {
  //   console.log(req.body.name)

  const { name, email, password, role, status } = req.body;

  // INSERT INTO ...
  const newUser = await User.create({ name, email, password, role, status });

  res.status(201).json({ newUser });
});

const updateUser = catchAsync(async (req, res, next) => {
  const { userId } = req;
  const { name, email } = req.body;

  await userId.update({ name, email });
  res.status(200).json({ status: 'Success' });
});

const deleteUser = catchAsync(async (req, res, next) => {
  const { userId } = req;
  //delete from...
  //await user.destroy();
  await userId.update({ status: 'deleted' });
  res.status(200).json({ status: 'Success' });
});

module.exports = {
  getAllUsers,
  createUser,
  getUsersId,
  updateUser,
  deleteUser,
};
