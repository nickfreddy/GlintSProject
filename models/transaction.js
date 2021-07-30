const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const transactionSchema = new mongoose.Schema(
  // For column
  {
    good: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'customer',
    },
    quantity: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      require: true,
    },
  },
  // Enables timestamps
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

// Enable soft delete, it will make delete column automaticly
transactionSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('transaction', transactionSchema); // Export transaction models
