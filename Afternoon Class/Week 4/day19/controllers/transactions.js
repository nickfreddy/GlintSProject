const { transaction, good, customer, supplier } = require('../models');

class Transaction {
  async createTransaction(req, res, next) {
    try {
      // create transaction
      const newData = await transaction.create(req.body);

      // Find transaction with join
      const data = await transaction.findOne({
        where: {
          id: newData.id,
        },
        attributes: { exclude: ['id_good', 'id_customer'] },
        // Include is join
        include: [
          {
            model: customer,
          },
          {
            model: good,
            include: [
              {
                model: supplier,
              },
            ],
          },
        ],
      });

      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Transaction();
