const express = require('express');

const { getAllSuppliers } = require('../controllers/suppliers');

const router = express.Router();

router.get('/', getAllSuppliers);

module.exports = router;
