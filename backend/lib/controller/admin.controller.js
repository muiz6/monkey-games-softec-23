const { Admin, User } = require('../db/model');
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

module.exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({});
    responseHelper(res, 200, 'Users found', users);
  } catch (error) {
    responseHelper(res, 500, 'Unable to get data');
  }
};

module.exports.blackListSwitch = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    const updatedUser = await User.update(
      { isBlacklisted: !user.dataValues.isBlacklisted },
      { where: { id } }
    );
    responseHelper(res, 200, 'user updated', updatedUser);
  } catch (error) {
    responseHelper(res, 200, error.message);
  }
};
