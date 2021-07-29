const express = require('express');

// Import auth
const { admin, user, adminOrUser } = require('../middlewares/auth');

// Import validator
const {
  createOrUpdateTransactionValidator,
  getDetailValidator,
} = require('../middlewares/validators/transactions');

// Import controller
const {
  createTransaction,
  getAllTransactions,
  getDetailTransaction,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactions');

// Make router
const router = express.Router();

// Make some routes
router.post('/', admin, createOrUpdateTransactionValidator, createTransaction);
router.get('/', adminOrUser, getAllTransactions);

router.get('/:id', adminOrUser, getDetailValidator, getDetailTransaction);
router.put(
  '/:id',
  admin,
  createOrUpdateTransactionValidator,
  updateTransaction
);
router.delete('/:id', admin, deleteTransaction);

// Export
module.exports = router;
