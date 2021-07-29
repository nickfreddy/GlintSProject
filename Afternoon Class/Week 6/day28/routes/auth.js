const express = require('express');

// Import auth
const { signup, signin, adminOrUser } = require('../middlewares/auth');

// Import validator
const {
  signUpValidator,
  signInValidator,
} = require('../middlewares/validators/auth');

// Import controller
const { getToken, getMe } = require('../controllers/auth');

// Make router
const router = express.Router();

// Make routes
router.post('/signup', signUpValidator, signup, getToken);
router.post('/signin', signInValidator, signin, getToken);
router.get('/me', adminOrUser, getMe);

// Exports
module.exports = router;
