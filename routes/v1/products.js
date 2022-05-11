const express = require('express');
const router = express.Router();
// importing the conrollers
const productController = require('../../controller/products')

// routes to all the crud functionality for the product model
router.post('/create',productController.create);
router.get('/:id',productController.read);
router.get('/',productController.read_all);
router.delete('/:id',productController.delete);
router.post('/:id/update_quantity/?',productController.update);

module.exports = router;