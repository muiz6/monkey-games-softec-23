const { hashPassword, comparePassword } = require('../services/myBcrypt');

const { User } = require('../db/model');
const { responseHelper } = require('../helper/responseHelper');
const { signToken } = require('../services/jwt');

module.exports.signIn = async (req, res, next) => {
  try {
    const {
      body: { password, email },
    } = req;
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found!');
    const passwordFlag = await comparePassword(password, user.password);
    if (!passwordFlag) throw new Error('Email or password mismatch!');
    res.set('token', signToken(user.dataValues));
    return responseHelper(res, 200, 'User logged in successfully', user);
  } catch (error) {
    return responseHelper(res, 500, error.message);
  }
};

module.exports.signUp = async (req, res, next) => {
  try {
    const {
      body: { email, password, dob, gender, address },
    } = req;
    const encryptPassword = await hashPassword(password);
    const user = await User.create({
      email,
      password: encryptPassword,
      dob,
      gender,
      address,
    });
    return responseHelper(res, 200, 'User created successfully', user);
  } catch (error) {
    return responseHelper(res, 500, 'Unable to create user');
  }
};

module.exports.updatePredictedAge = async (req, res, next) => {
  try {
    const {
      body: { age },
      user: { id },
    } = req;
    const updatedUser = await User.update({ id }, { predictedAge: age });
    responseHelper(res, 200, 'user updated!', updatedUser);
  } catch (error) {
    responseHelper(res, 500, 'Unable to set preficted age');
  }
};
