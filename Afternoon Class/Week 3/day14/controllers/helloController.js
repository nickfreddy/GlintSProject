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

  getOneStudent(req, res) {
    try {
      const student = students.filter(
        (student) => student.id === eval(req.params.id)
      );

      res.status(200).json({
        data: student,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  createStudent(req, res) {
    try {
      students.push(req.body);

      res.status(200).json({
        data: req.body,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = new HelloController();
