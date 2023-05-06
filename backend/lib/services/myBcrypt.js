const bcrypt = require('bcrypt');

module.exports.hashPassword = async (password) => bcrypt.hash(password, 10);

module.exports.comparePassword = (password, encryptedPassword) =>
  bcrypt.compare(password, encryptedPassword);
