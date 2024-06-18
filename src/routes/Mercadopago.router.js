const express = require('express');
const router = express.Router();
const { payProduct } = require('../controllers/Mercadopago.controller');
const auth = require('../middlewares/auth');

router.post('/', payProduct); //auth


module.exports = router