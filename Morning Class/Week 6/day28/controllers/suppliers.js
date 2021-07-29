const { supplier } = require('../models');

class Suppliers {
  async getAllSuppliers(req, res, next) {
    try {
      const data = await supplier.find();

      if (data.length === 0) {
        return next({ message: 'Suppliers not found', statusCode: 404 });
      }

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Suppliers();
