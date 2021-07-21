const express = require('express');

// Import validator
const {
  createTransactionValidator,
} = require('../middlewares/validators/transactions');

// Import controller
const {
  createTransaction,
  getAllTransactions,
} = require('../controllers/transactions');

const router = express.Router();

router
  .route('/')
  .post(createTransactionValidator, createTransaction)
  .get(getAllTransactions);

module.exports = router;
