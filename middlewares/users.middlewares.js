const { User } = require('../models/user.model');

const userExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const userId = await User.findOne({ where: { id } });

    if (!userId) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found given that id',
      });
    }

    // add user data to the req object
    req.userId = userId;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userExists };
