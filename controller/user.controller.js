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
    const { id } = req.params;
    const userId = await User.findOne({ where: { id } });

    if (!userId) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found given that id',
      });
    }

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
    const { id } = req.params;
    const { name, email } = req.body;
    // await User.update({ name }, {where: {id }});
    const userUpdate = await User.findOne({ where: { id } });

    if (!userUpdate) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found given that id',
      });
    }
    await userUpdate.update({ name, email });

    res.status(200).json({ status: 'Success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userDelete = await User.findOne({ where: { id } });

    if (!userDelete) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found given that id',
      });
    }
    //delete from...
    //await user.destroy();
    await userDelete.update({ status: 'deleted' });
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
