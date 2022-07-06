const { Router } = require('express');

const {
  createProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  deleteProductByIdHandler,
  updateProductHandler,
} = require('./product.controller')

const router = Router();


router.get('/', getAllProductsHandler);
router.post('/', createProductHandler);
router.patch('/product/edit/:id', updateProductHandler)
router.get('/product/:id',  getProductByIdHandler);

router.delete('/product/:id', deleteProductByIdHandler);
module.exports = router;