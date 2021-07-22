const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const supplierSchema = new mongoose.Schema(
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
  }
);

// Photo Getter
function getPhoto(photo) {
  if (!photo || photo.includes('https') || photo.includes('http')) {
    return photo;
  }

  return `/images/suppliers/${photo}`;
}

// Enable soft delete, it will make delete column automaticly
supplierSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

// Export model
module.exports = mongoose.model('supplier', supplierSchema);
