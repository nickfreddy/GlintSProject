const express = require('express'); // import express

/* Import controller */
const {
  getAllTransactions,
  getDetailTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactions');

const router = express.Router(); // make express router

/* If user (GET) /transactions, it will go here */
router.get('/', getAllTransactions);

/* If user (GET) /transactions/:id, go here */
router.get('/:id', getDetailTransaction);

/* If user (POST) /transactions, go here */
router.post('/', createTransaction);

/* If user (PUT) /transaction/:id, go here */
router.put('/:id', updateTransaction);

/* If user (DELETE) /transaction/:id, go here */
router.delete('/:id', deleteTransaction);

// Export router
module.exports = router;
