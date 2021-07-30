const { good } = require('../models');

class Goods {
  async getAllGoods(req, res, next) {
    try {
      const data = await good.find();

      if (data.length === 0) {
        return next({ message: 'Goods not found', statusCode: 404 });
      }

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Goods();
