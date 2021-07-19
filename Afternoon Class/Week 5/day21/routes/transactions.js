const express = require('express');

// Import validator

// Import controller
const { createTransaction } = require('../controllers/transactions');

const router = express.Router();

router.post('/', createTransaction);

module.exports = router;
