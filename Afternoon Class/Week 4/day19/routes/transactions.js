const express = require('express');

/* Import validator */
const {
  createTransactionValidator,
} = require('../middlewares/validators/transactions');

/* Import controller */
const { createTransaction } = require('../controllers/transactions');

const router = express.Router();

router.post('/', createTransactionValidator, createTransaction);

module.exports = router;
