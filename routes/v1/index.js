const express = require('express');
const router = express.Router();


// this is routing to routes that start with  /products 
router.use('/products',require('./products'))

module.exports = router;