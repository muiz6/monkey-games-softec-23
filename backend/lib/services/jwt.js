const jwt = require('jsonwebtoken');
const { responseHelper } = require('../helper/responseHelper');

const secret = 'asdjkasndnasdjanfuoqefnuoqn123123';

module.exports.signToken = (data) => jwt.sign(data, secret);

module.exports.verifyTokenUser = (req, res, next) => {
  try {
    const data = jwt.verify(req.headers.token, secret);
    req['user'] = data;
    next();
  } catch (error) {
    responseHelper(res, 500, 'Invalid token received');
  }
};
