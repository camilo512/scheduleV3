const { Repair } = require('../models/reparir.model');
const { User } = require('../models/user.model');

// utils
const { catchAsync } = require('../utils/catchAsync');

const getAllRepairs = catchAsync(async (req, res, next) => {
  const repairs = await Repair.findAll({
    include: [{ model: User }],
  });
  res.status(200).json({
    repairs,
  });
});

const getRepairId = catchAsync(async (req, res, next) => {
  const { repairId } = req;
  // const { id } = req.params;
  // const repairId = await Repair.findOne({ where: { id } });

  if (!repairId) {
    return res.status(404).json({
      status: 'error',
      message: 'Repair not found given that id',
    });
  }

  res.status(200).json({
    repairId,
  });
});

const createRepairs = catchAsync(async (req, res) => {
  //   console.log(req.body.name)

  const { date, computerNumber, comments, status, userId } = req.body;

  const newRepair = await Repair.create({
    date,
    computerNumber,
    comments,
    status,
    userId,
  });

  res.status(201).json({ newRepair });
});

const updateRepair = catchAsync(async (req, res) => {
  const { repairId } = req;
  const { status } = req.body;

  await repairId.update({ status });
  res.status(200).json({ status: 'Success' });
});

const deleteRepair = catchAsync(async (req, res) => {
  const { repairId } = req;

  await repairId.update({ status: 'cancelled' });
  res.status(200).json({ status: 'Success' });
});

module.exports = {
  getAllRepairs,
  createRepairs,
  getRepairId,
  updateRepair,
  deleteRepair,
};
