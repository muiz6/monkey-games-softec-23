const { responseHelper } = require('../helper/responseHelper');

const { Cart, Item } = require('../db/model');
module.exports.createOrder = async (req, res, next) => {
  const {
    body: {
      cvv,
      cardNumber,
      cardName,
      cardExpiry,
      paymentData,
      paymentStatus,
      payment,
    },
    user: { id },
  } = req;
  try {
    const cartProducts = await Cart.findAll({
      where: { userId: id },
      attributes: ['productId', 'quantity'],
    });

    const productIds = cartProducts?.map(
      ({ dataValues: { productId } }) => productId
    );
    // for(let id of productIds) {
    //     const
    // }
    responseHelper(res, 200, '', productIds);
  } catch (error) {
    responseHelper(res, 500, error.message);
  }
};
