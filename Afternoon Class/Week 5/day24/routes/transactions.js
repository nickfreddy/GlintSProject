const express = require('express');

// Import validator
const {
  createOrUpdateTransactionValidator,
} = require('../middlewares/validators/transactions');

// Import controller
const { createTransaction } = require('../controllers/transactions');

// Make router
const router = express.Router();

// Make routes
router.post('/', createOrUpdateTransactionValidator, createTransaction);

// Exports
module.exports = router;
