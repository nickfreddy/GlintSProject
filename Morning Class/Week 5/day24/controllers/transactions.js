const { transaction } = require('../models');

class Transactions {
  async createTransaction(req, res, next) {
    try {
      const newData = await transaction.create(req.body);

      let data = await transaction
        .findOne({ _id: newData._id })
        .populate('customer');

      data.good.supplier = await supplier.findOne({ _id: data.good.supplier });

      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Transactions();
