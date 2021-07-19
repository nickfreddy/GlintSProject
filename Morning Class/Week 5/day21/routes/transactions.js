const express = require('express');

// Import validator

// Import controller
const { createTransaction } = require('../controllers/transactions');

// Make router
const router = express.Router();

router.post('/', createTransaction);

module.exports = router;
