const express = require('express');

// Import validator
const {
  createOrUpdateTransactionValidator,
  getDetailValidator,
} = require('../middlewares/validators/transactions');

// Import controller
const {
  createTransaction,
  getAllTransactions,
  getDetailTransaction,
} = require('../controllers/transactions');

// Make router
const router = express.Router();

// Make some routes
router.post('/', createOrUpdateTransactionValidator, createTransaction);
router.get('/', getAllTransactions);

router.get('/:id', getDetailValidator, getDetailTransaction);

// Export
module.exports = router;
