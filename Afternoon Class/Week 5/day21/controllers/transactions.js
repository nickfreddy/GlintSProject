const { ObjectId } = require('mongodb');
const connection = require('../models');

exports.createTransaction = async (req, res, next) => {
  try {
    const newData = await connection
      .db('sales_afternoon1')
      .collection('transaction')
      .insertOne(req.body);

    const data = await connection
      .db('sales_afternoon1')
      .collection('transaction')
      .findOne({ _id: newData.insertedId });

    res.status(201).json({ data });
  } catch (error) {
    next(error);
  }
};
