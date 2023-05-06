const express = require('express');
const { verifyTokenUser } = require('../services/jwt');
const {
  favouriteToggleSwitch,
  getFavouriteItems,
} = require('../controller/favourite.controller');

const router = express.Router();
router.use(verifyTokenUser);
router.post('/:productid', favouriteToggleSwitch).get('/', getFavouriteItems);

module.exports = router;
