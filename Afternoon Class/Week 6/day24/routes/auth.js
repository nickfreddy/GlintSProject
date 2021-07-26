const express = require('express');

// Import auth
const { signup } = require('../middlewares/auth');

// Import validator
const { signUpValidator } = require('../middlewares/validators/auth');

// Import controller
const { getToken } = require('../controllers/auth');

// Make router
const router = express.Router();

// Make routes
router.post('/signup', signUpValidator, signup, getToken);

// Exports
module.exports = router;
