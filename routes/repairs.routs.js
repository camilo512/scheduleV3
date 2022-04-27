const express = require('express');

//Middleweareas
const { repairExists } = require('../middlewares/repairs.middlewares');

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
router.post('/', createRepairs);

router
  .route('/:id')
  .get(repairExists, getRepairId)
  .patch(repairExists, updateRepair)
  .delete(repairExists, deleteRepair);

module.exports = { repairsRouter: router };
