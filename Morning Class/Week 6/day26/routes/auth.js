const express = require('express');

// Import auth
const { signup } = require('../middlewares/auth');

// Import controller
const { getToken } = require('../controllers/auth');

// Make router
const router = express.Router();

// Routes
router.post('/signup', signup, getToken);

// Exports
module.exports = router;
