const express = require('express');

const router = express.Router();
const {
  signUp,
  signIn,
  updatePredictedAge,
} = require('../controller/user.controller');

router
  .post('/signup', signUp)
  .post('/signin', signIn)
  .patch('/', updatePredictedAge);

module.exports = router;
