const { User } = require('../models/user.model');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      users,
    });
  } catch (error) {
    console.log(error);
  }
};

const getUsersId = async (req, res) => {
  try {
    const { userId } = req;
    // const { id } = req.params;
    // const userId = await User.findOne({ where: { id } });

    res.status(200).json({
      userId,
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  //   console.log(req.body.name)
  try {
    const { name, email, password, role, status } = req.body;

    // INSERT INTO ...
    const newUser = await User.create({ name, email, password, role, status });

    res.status(201).json({ newUser });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req;
    const { name, email } = req.body;

    await userId.update({ name, email });
    res.status(200).json({ status: 'Success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req;
    //delete from...
    //await user.destroy();
    await userId.update({ status: 'deleted' });
    res.status(200).json({ status: 'Success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUsersId,
  updateUser,
  deleteUser,
};
