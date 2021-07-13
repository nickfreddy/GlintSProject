const express = require('express'); // Import express

/* Import controller */
const {
  getAllTransactions,
  getDetailTransaction,
} = require('../controllers/transactions');

const router = express.Router(); // make express router

/* If user (GET) /, it will go here */
router.get('/', getAllTransactions);

/* If user (GET) /, it will go here */
router.get('/:id', getDetailTransaction);

module.exports = router;
