const validator = require('validator');
const { ObjectId } = require('mongodb');
const connection = require('../../models');

exports.createOrUpdateTransactionValidator = async (req, res, next) => {
  try {
    const errorMessages = [];

    if (!validator.isInt(req.body.quantity)) {
      errorMessages.push('quantity must be number (integer)');
    }

    if (errorMessages.length > 0) {
      return next({ messages: errorMessages, statusCode: 400 });
    }

    /* Find good and total */
    const good = await connection
      .db('sales_afternoon')
      .collection('goods')
      .findOne({ _id: ObjectId(req.body.id_good) });

    if (!good) {
      return next({ message: 'Good not found', statusCode: 400 });
    }

    /* Because price is decimal128, it needs to convert to string */
    const total = eval(req.body.quantity * good.price.toString());

    /* Modify req.body */
    req.body = {
      id_customer: ObjectId(req.body.id_customer),
      good,
      quantity: parseInt(req.body.quantity),
      total,
    };

    next();
  } catch (error) {
    next(error);
  }
};
