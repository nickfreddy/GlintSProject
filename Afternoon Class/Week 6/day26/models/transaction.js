const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const transactionSchema = new mongoose.Schema(
  // Column
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'customer',
    },
    good: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  // Options
  {
    // Enable timestamps
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

// Enable soft delete, it will make delete column automaticly
transactionSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

// Export model
module.exports = mongoose.model('transaction', transactionSchema);
