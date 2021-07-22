const { transaction, supplier } = require('../models');

class Transactions {
  async createTransaction(req, res, next) {
    try {
      // Create transaction
      const newData = await transaction.create(req.body);

      // Find the transaction has been created
      let data = await transaction
        .findOne({ _id: newData._id })
        .populate('customer');

      // To know who is the supplier
      data.good.supplier = await supplier.findOne({ _id: data.good.supplier });

      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Transactions();
