const { Repair } = require('../models/reparir.model');

const getAllRepairs = async (req, res) => {
  try {
    const repairs = await Repair.findAll();
    res.status(200).json({
      repairs,
    });
  } catch (error) {
    console.log(error);
  }
};

const getRepairId = async (req, res) => {
  try {
    const { id } = req.params;
    const repairId = await Repair.findOne({ where: { id } });

    if (!repairId) {
      return res.status(404).json({
        status: 'error',
        message: 'Repair not found given that id',
      });
    }

    res.status(200).json({
      repairId,
    });
  } catch (error) {
    console.log(error);
  }
};

const createRepairs = async (req, res) => {
  //   console.log(req.body.name)
  try {
    const { date, status, userId } = req.body;

    const newRepair = await Repair.create({ date, status, userId });

    res.status(201).json({ newRepair });
  } catch (error) {
    console.log(error);
  }
};

const updateRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const repairUpdate = await Repair.findOne({ where: { id } });

    if (!repairUpdate) {
      return res.status(404).json({
        status: 'error',
        message: 'Repair not found given that id',
      });
    }

    await repairUpdate.update({ status });
    res.status(200).json({ status: 'Success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const repairDelelet = await Repair.findOne({ where: { id } });

    if (!repairDelelet) {
      return res.status(404).json({
        status: 'error',
        message: 'Repair not found given that id',
      });
    }

    await repairDelelet.update({ status: 'cancelled' });
    res.status(200).json({ status: 'Success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRepairs,
  createRepairs,
  getRepairId,
  updateRepair,
  deleteRepair,
};
