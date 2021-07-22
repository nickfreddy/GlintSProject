const express = require('express');

// Import validator
const {
  createOrUpdateTransactionValidator,
} = require('../middlewares/validators/transactions');

// Import controller
const { createTransaction } = require('../controllers/transactions');

// Make router
const router = express.Router();

// Make some routes
router.post('/', createOrUpdateTransactionValidator, createTransaction);

// Export
module.exports = router;
