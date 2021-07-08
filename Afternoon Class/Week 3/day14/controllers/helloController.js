const students = require('../models/students.json');

class HelloController {
  getAllStudents(req, res) {
    try {
      res.status(200).json({
        data: students,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = new HelloController();
