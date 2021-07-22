const validator = require('validator');
const mongoose = require('mongoose');
const { good, customer } = require('../../models');

exports.createOrUpdateTransactionValidator = async (req, res, next) => {
  try {
    /* Validate the user input */
    const errorMessages = [];

    if (!validator.isInt(req.body.quantity)) {
      errorMessages.push('quantity must be number (integer)');
    }

    if (!mongoose.Types.ObjectId.isValid(req.body.id_good)) {
      errorMessages.push('id_good is not valid');
    }

    if (!mongoose.Types.ObjectId.isValid(req.body.id_customer)) {
      errorMessages.push('id_customer is not valid');
    }

    if (errorMessages.length > 0) {
      return next({ messages: errorMessages, statusCode: 400 });
    }

    /* Find good and customer is exist or not */
    const data = await Promise.all([
      good.findOne({ _id: req.body.id_good }),
      customer.findOne({ _id: req.body.id_customer }),
    ]);

    if (!data[0] || !data[1]) {
      errorMessages.push('Good or Customer not found');
    }

    if (errorMessages.length > 0) {
      return next({ messages: errorMessages, statusCode: 400 });
    }

    // Find price and calculate total
    req.body.total = parseInt(req.body.quantity) * parseFloat(good.price);
    req.body.good = data[0];
    req.body.customer = req.body.id_customer;

    next();
  } catch (error) {
    next(error);
  }
};
