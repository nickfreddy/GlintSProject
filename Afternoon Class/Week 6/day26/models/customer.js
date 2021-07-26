const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const customerSchema = new mongoose.Schema(
  // Column
  {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
      get: getPhoto,
    },
  },
  // Options
  {
    // Enable timestamps
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    toJSON: { getters: true },
  }
);

// Photo Getter
function getPhoto(photo) {
  if (!photo || photo.includes('https') || photo.includes('http')) {
    return photo;
  }

  return `/images/customers/${photo}`;
}

// Enable soft delete, it will make delete column automaticly
customerSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

// Export model
module.exports = mongoose.model('customer', customerSchema);
