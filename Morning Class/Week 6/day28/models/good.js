const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const goodSchema = new mongoose.Schema(
  // For column
  {
    name: {
      type: String,
      required: true,
      unique: true,
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
      require: true,
      ref: 'supplier', // It will make likes join to supplier
    },
  },
  // Enables timestamps
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    toJSON: { getters: true },
  }
);

/* Getter photo */
function getPhoto(photo) {
  if (!photo || photo.includes('https') || photo.includes('http')) {
    return photo;
  }

  return `/images/goods/${photo}`;
}

// Enable soft delete, it will make delete column automaticly
goodSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('good', goodSchema); // Export good models
