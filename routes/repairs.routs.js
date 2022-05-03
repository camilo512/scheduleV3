const express = require('express');

//Middleweareas
const { repairExists } = require('../middlewares/repairs.middlewares');
const {
  createRepairValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');

// Controller
const {
  createRepairs,
  getAllRepairs,
  getRepairId,
  updateRepair,
  deleteRepair,
} = require('../controller/repair.controller');

const router = express.Router();

//http://localhost:4001/api/v1/repair
router.get('/', getAllRepairs);
router.post('/', createRepairValidations, checkValidations, createRepairs);

router
  .route('/:id')
  .get(repairExists, getRepairId)
  .patch(repairExists, updateRepair)
  .delete(repairExists, deleteRepair);

module.exports = { repairsRouter: router };
