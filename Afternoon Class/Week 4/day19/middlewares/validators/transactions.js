const validator = require('validator');
const { good } = require('../../models');

exports.createTransactionValidator = async (req, res, next) => {
  try {
    /* Validate the request */
    const errorMessages = [];

    if (!validator.isInt(req.body.id_good.toString())) {
      errorMessages.push(`id_good must be number (integer)`);
    }

    if (!validator.isInt(req.body.id_customer.toString())) {
      errorMessages.push(`id_customer must be number (integer)`);
    }

    if (!validator.isInt(req.body.quantity.toString())) {
      errorMessages.push(`quantity must be number (integer)`);
    }

    if (errorMessages.length > 0) {
      return next({ statusCode: 400, messages: errorMessages });
    }

    // Find price and total
    const findGood = await good.findOne({ where: { id: req.body.id_good } });

    if (!findGood) {
      return next({ statusCode: 404, message: 'Good not found' });
    }

    const price = findGood.price;
    req.body.total = eval(price * req.body.quantity);

    next();
  } catch (error) {
    next(error);
  }
};
