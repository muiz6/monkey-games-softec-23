const { responseHelper } = require('../helper/responseHelper');

const { Cart, Item, Payment, Order } = require('../db/model');
module.exports.createOrder = async (req, res, next) => {
  const {
    body: { cvv, cardNumber, cardName, cardExpiry, paymentData, paymentStatus },
    user: { id, isBlacklisted },
  } = req;
  if (isBlacklisted) {
    throw new Error('You are blacklisted from buying!');
  }
  try {
    const cartProducts = await Cart.findAll({
      where: { userId: id },
      attributes: ['productId', 'quantity'],
    });

    const productIds = cartProducts?.map(
      ({ dataValues: { productId, quantity } }) => ({
        productId,
        quantity,
      })
    );
    if (!productIds.length) throw new Error('Nothing in cart!');
    const products = await Item.findAll({
      where: { id: productIds.map(({ productId }) => productId) },
      attributes: ['id', 'inventoryCount'],
    });
    let newInventoryCount = {};
    productIds.map(({ productId, quantity }) => {
      products.map(({ dataValues: { id, inventoryCount } }) => {
        if (id == productId && quantity > inventoryCount) {
          throw new Error(`Order # ${productId} is out of inventory`);
        }
        newInventoryCount[id] = inventoryCount - quantity;
      });
    });
    const payment = await Payment.create({
      cvv,
      cardNumber,
      cardName,
      cardExpiry,
      paymentData,
      paymentStatus,
    });
    productIds.map(({ productId }) => {
      Item.update(
        {
          inventoryCount: newInventoryCount[productId],
        },
        {
          where: {
            id: productId,
          },
        }
      );
    });
    const order = await Order.create({
      userId: id,
      paymentId: payment.id,
      itemId: productIds.map(({ productId }) => productId),
    });

    responseHelper(res, 200, '', order);
  } catch (error) {
    responseHelper(res, 500, error.message);
  }
};
