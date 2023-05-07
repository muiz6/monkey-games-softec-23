const express = require('express');
const { createOrder } = require('../controller/order.controller');
const { verifyTokenUser } = require('../services/jwt');

const router = express.Router();
router.use(verifyTokenUser);
router.post('/', createOrder);

module.exports = router;
