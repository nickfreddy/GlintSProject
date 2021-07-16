const express = require('express');

// Import validators
const {
  createTransactionValidator,
  updateTransactionValidator,
} = require('../middlewares/validators/transactions');

// Import controllers
const {
  getAllTransactions,
  createTransaction,
  getDetailTransaction,
  deleteTransaction,
  updateTransaction,
} = require('../controllers/transactions');

const router = express.Router();

// It will find route that has / first after that it will find is it GET or POST
router
  .route('/')
  .get(getAllTransactions)
  .post(createTransactionValidator, createTransaction);

// It will find route that has /:id first after that it will find is it GET or PUT or DELETE
router
  .route('/:id')
  .get(getDetailTransaction)
  .put(updateTransactionValidator, updateTransaction)
  .delete(deleteTransaction);

module.exports = router;
