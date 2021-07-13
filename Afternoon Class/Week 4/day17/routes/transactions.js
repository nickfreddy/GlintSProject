const express = require('express'); // Import express

/* Import controller */
const { getAllTransactions } = require('../controllers/transactions');

const router = express.Router(); // make express router

/* If user (GET) /, it will go here */
router.get('/', getAllTransactions);

module.exports = router;
