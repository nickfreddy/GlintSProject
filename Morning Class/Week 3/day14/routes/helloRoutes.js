const express = require('express'); // Import express

const {
  getAllStudents,
  getOneStudent,
  createStudent,
} = require('../controllers/helloController');

const router = express.Router(); // Make router to define the routes

/* If user go to (GET) http://localhost:3000/ or http://localhost:3000, it will go to here */
/* GET used to GET the data */
router.get('/', getAllStudents);

router.get('/:id', getOneStudent);

/* If user go to (POST) http://localhost:3000/ or http://localhost:3000, it will go to here */
/* POST used to send data from client */
router.post('/', createStudent);

/* If user go to (PUT) http://localhost:3000/ or http://localhost:3000, it will go to here */
/* PUT used to change the data */
router.put('/', (req, res) => {
  res.send('This is PUT');
});

/* If user go to (DELETE) http://localhost:3000/ or http://localhost:3000, it will go to here */
/* DELETE used to delete data */
router.delete('/', (req, res) => {
  res.send('This is DELETE');
});

module.exports = router; // export router
