const express = require('express');

const router = express.Router();
const { signUp, signIn } = require('../controller/user.controller');

router.post('/signup', signUp).post('/signin', signIn);

module.exports = router;
