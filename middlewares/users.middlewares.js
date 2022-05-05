const { User } = require('../models/user.model');

// utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const userExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const userId = await User.findOne({ where: { id } });

  if (!userId) {
    return next(new AppError('User does not exist with given Id', 404));
  }

  // add user data to the req object
  req.userId = userId;
  next();
});

module.exports = { userExists };
