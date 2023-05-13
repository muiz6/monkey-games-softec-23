const express = require('express');
const {
  cartToggleSwitch,
  getCartItems,
} = require('../controller/cart.controller');
const { verifyTokenUser } = require('../services/jwt');

const router = express.Router();
router.use(verifyTokenUser);
router.post('/:productid', cartToggleSwitch).get('/', getCartItems);

module.exports = router;
