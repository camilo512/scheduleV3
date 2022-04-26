const express = require('express');

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

router.route('/:id').get(getRepairId).patch(updateRepair).delete(deleteRepair);

module.exports = { repairsRouter: router };
