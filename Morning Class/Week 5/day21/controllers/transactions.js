const { ObjectId } = require('mongodb'); // Import ObjectId
const connection = require('../models');

exports.createTransaction = async (req, res, next) => {
  try {
    // Insert data transaction
    const newData = await connection
      .db('sales_morning')
      .collection('transactions')
      .insertOne(req.body);

    const data = await connection
      .db('sales_morning')
      .collection('transactions')
      .findOne({ _id: newData.insertedId });

    // If success
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
