module.exports.responseHelper = (res, status, message, data = {}) => {
  res.status(status).send({
    message,
    data,
  });
};
