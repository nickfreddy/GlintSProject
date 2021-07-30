const express = require('express');

const { getAllGoods } = require('../controllers/goods');

const router = express.Router();

router.get('/', getAllGoods);

module.exports = router;
