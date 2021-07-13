const express = require('express'); // import express

/* Import controller */
const {
  getAllTransactions,
  getDetailTransaction,
} = require('../controllers/transactions');

const router = express.Router(); // make express router

/* If user (GET) /transactions, it will go here */
router.get('/', getAllTransactions);

/* If user (GET) /transactions/:id, go here */
router.get('/:id', getDetailTransaction);

// Export router
module.exports = router;
