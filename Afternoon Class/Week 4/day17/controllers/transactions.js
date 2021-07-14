const { query } = require('../models');

class Transactions {
  async getAllTransactions(req, res) {
    try {
      const data = await query(
        'SELECT t.id, g.name as goodName, c.name as customer, s.name as supplier, t.time, t.quantity, t.total FROM transactions t JOIN goods g ON g.id = t.id_good  JOIN customers c ON t.id_customer = c.id JOIN suppliers s ON s.id = g.id_supplier ORDER BY t.id'
      );

      if (data.length === 0) {
        return res.status(404).json({
          message: 'Transactions not found',
        });
      }

      res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  async getDetailTransaction(req, res) {
    try {
      const data = await query(
        `SELECT t.id, g.name as goodName, c.name as customer, s.name as supplier, t.time, t.quantity, t.total FROM transactions t JOIN goods g ON g.id = t.id_good  JOIN customers c ON t.id_customer = c.id JOIN suppliers s ON s.id = g.id_supplier WHERE t.id=${req.params.id}`
      );

      if (data.length === 0) {
        return res.status(404).json({
          message: 'Transaction not found',
        });
      }

      res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  async createTransaction(req, res) {
    try {
      /* Find good price and total amount */
      const good = await query(
        `SELECT price FROM goods WHERE id=${req.body.id_good}`
      );

      // If good not found
      if (good.length === 0) {
        return res.status(404).json({
          message: 'Good not found',
        });
      }

      const price = good[0].price;
      const total = eval(price * req.body.quantity);

      /* Insert transactions */
      const newTransaction = await query(
        `INSERT INTO transactions(id_good, id_customer, quantity, total) VALUES (${req.body.id_good}, ${req.body.id_customer}, ${req.body.quantity}, ${total})`
      );

      /* Get the newTransaction data */
      const data = await query(
        `SELECT t.id, g.name as goodName, c.name as customer, s.name as supplier, t.time, t.quantity, t.total FROM transactions t JOIN goods g ON t.id_good = g.id JOIN customers c ON c.id = t.id_customer JOIN suppliers s ON s.id = g.id_supplier WHERE t.id=${newTransaction.insertId}`
      );

      res.status(201).json({
        data,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async updateTransaction(req, res) {
    try {
      /* Find the transaction */
      const transaction = await query(
        `SELECT * FROM transactions WHERE id=${req.params.id}`
      );

      if (transaction.length === 0) {
        return res.status(404).json({
          message: 'Transaction not found',
        });
      }

      /* Find good price */
      const good = await query(
        `SELECT price FROM goods WHERE id=${req.body.id_good}`
      );

      if (good.length === 0) {
        return res.status(404).json({
          message: 'Good not found',
        });
      }

      const price = good[0].price;
      const total = eval(price * req.body.quantity);

      /* Update transactions */
      await query(
        `UPDATE transactions SET id_good=${req.body.id_good}, id_customer=${req.body.id_customer}, quantity=${req.body.quantity}, total=${total} WHERE id=${req.params.id}`
      );

      /* Get the updated transaction data */
      const data = await query(
        `SELECT t.id, g.name as goodName, c.name as customer, s.name as supplier, t.time, t.quantity, t.total FROM transactions t JOIN goods g ON t.id_good = g.id JOIN customers c ON c.id = t.id_customer JOIN suppliers s ON s.id = g.id_supplier WHERE t.id=${req.params.id}`
      );

      res.status(201).json({
        data,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async deleteTransaction(req, res) {
    try {
      const deletedData = await query(
        `DELETE FROM transactions WHERE id=${req.params.id}`
      );

      if (deletedData.affectedRows === 0) {
        return res.status(404).json({
          message: 'Transaction not found',
        });
      }

      res.status(200).json({
        message: `Transaction with id ${req.params.id} has been deleted`,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = new Transactions();
