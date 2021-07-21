const express = require('express');

// Import validator
const {
  createTransactionValidator,
} = require('../middlewares/validators/transactions');

// Import controller
const {
  createTransaction,
  getAllTransactions,
  getDetailTransaction,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactions');

// Make router
const router = express.Router();

router
  .route('/')
  .post(createTransactionValidator, createTransaction)
  .get(getAllTransactions);

router
  .route('/:id')
  .get(getDetailTransaction)
  .put(updateTransaction)
  .delete(deleteTransaction);

module.exports = router;
