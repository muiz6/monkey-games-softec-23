const express = require('express');
const { verifyTokenUser } = require('../services/jwt');
const { postReview } = require('../controller/review.controller');

const router = express.Router();
router.use(verifyTokenUser);
router.post('/', postReview);

module.exports = router;
