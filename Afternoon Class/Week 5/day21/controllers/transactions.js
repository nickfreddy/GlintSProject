const { ObjectId } = require('mongodb');
const connection = require('../models');

class Transactions {
  async getAllTransactions(req, res, next) {
    try {
      const data = await connection
        .db('sales_afternoon')
        .collection('transactions')
        .find()
        .toArray();

      if (data.length === 0) {
        return next({ message: 'Transactions not found', statusCode: 404 });
      }

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async createTransaction(req, res, next) {
    try {
      const newData = await connection
        .db('sales_afternoon')
        .collection('transactions')
        .insertOne(req.body);

      let data = await connection
        .db('sales_afternoon')
        .collection('transactions')
        .findOne({ _id: newData.insertedId });

      data.customer = await connection
        .db('sales_afternoon')
        .collection('customers')
        .findOne({ _id: ObjectId(data.id_customer) });

      data.good.supplier = await connection
        .db('sales_afternoon')
        .collection('suppliers')
        .findOne({ _id: ObjectId(data.good.id_supplier) });

      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Transactions();
