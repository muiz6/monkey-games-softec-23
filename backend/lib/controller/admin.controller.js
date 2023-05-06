const { Admin } = require('../db/model');
const { responseHelper } = require('../helper/responseHelper');
const { signToken } = require('../services/jwt');
const { comparePassword } = require('../services/myBcrypt');

module.exports.signIn = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;
    const admin = await Admin.findOne({ email });
    if (!admin) throw new Error('No User found');
    const flag = await comparePassword(password, admin.dataValues.password);
    if (!flag) throw new Error('Email or password mismatch!');
    res.set('token', signToken(admin.dataValues));
    return responseHelper(res, 200, 'User logged in successfully', admin);
  } catch (error) {
    return responseHelper(res, 500, error.message);
  }
};
