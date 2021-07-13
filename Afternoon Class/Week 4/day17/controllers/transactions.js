const { connection } = require('../models');

class Transactions {
  getAllTransactions(req, res) {
    connection.query(
      'SELECT t.id, g.name as goodName, c.name as customer, s.name as supplier, t.time, t.quantity, t.total FROM transactions t JOIN goods g ON g.id = t.id_good  JOIN customers c ON t.id_customer = c.id JOIN suppliers s ON s.id = g.id_supplier',
      function (err, results) {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }

        res.status(200).json({
          data: results,
        });
      }
    );
  }

  getDetailTransaction(req, res) {
    connection.query(
      `SELECT t.id, g.name as goodName, c.name as customer, s.name as supplier, t.time, t.quantity, t.total FROM transactions t JOIN goods g ON g.id = t.id_good  JOIN customers c ON t.id_customer = c.id JOIN suppliers s ON s.id = g.id_supplier WHERE t.id=${req.params.id}`,
      function (err, results) {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }

        if (results.length === 0) {
          return res.status(404).json({
            message: 'Transaction not found',
          });
        }

        res.status(200).json({
          data: results,
        });
      }
    );
  }
}

module.exports = new Transactions();
