const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const goodSchema = new mongoose.Schema(
  // Column
  {
    name: {
      type: String,
      required: true,
      unique: true, // make good name unique
    },
    price: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: false,
      get: getPhoto,
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'supplier',
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

  return `/images/goods/${photo}`;
}

// Enable soft delete, it will make delete column automaticly
goodSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

// Export model
module.exports = mongoose.model('good', goodSchema);
