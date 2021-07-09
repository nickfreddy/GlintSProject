const express = require('express'); // Import express

const router = express.Router();

// Import controller
const {
  getAllStudents,
  getOneStudent,
  createStudent,
} = require('../controllers/helloController');

/* If user access http://localhost:3000/ or http://localhost:3000 (GET), it will go here */
/* GET used to get the data */
router.get('/', getAllStudents);

router.get('/:id', getOneStudent);

/* If user access http://localhost:3000/ or http://localhost:3000 (POST), it will go here */
/* POST used to send the data */
router.post('/', createStudent);

/* If user access http://localhost:3000/ or http://localhost:3000 (PUT), it will go here */
/* PUT used to change the data */
router.put('/:id', (req, res) => {
  res.send('This is PUT!');
});

/* If user access http://localhost:3000/ or http://localhost:3000 (DELETE), it will go here */
/* DELETE used to delete the data */
router.delete('/:id', (req, res) => {
  res.send('This is DELETE!');
});

module.exports = router;
