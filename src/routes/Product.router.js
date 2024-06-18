const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts, getIdProdu } = require('../controllers/Product.controller');
const auth = require('../middlewares/auth');

router.post('/', auth, createProduct);
router.get('/',  getAllProducts);
router.post('/id',  getIdProdu);


module.exports = router