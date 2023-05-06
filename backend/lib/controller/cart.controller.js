const { sequelize, Cart, Item } = require('../db/model');
const { responseHelper } = require('../helper/responseHelper');

module.exports.cartToggleSwitch = async (req, res, next) => {
  const {
    params: { productid },
    body: { quantity = 1 },
    user: { id },
  } = req;
  try {
    const result = await sequelize.query(
      `Call toggleCart(${id},${productid},${quantity});`
    );
    responseHelper(res, 200, '', result);
  } catch (error) {
    responseHelper(res, 500, 'Unable to process the request');
  }
};

module.exports.getCartItems = async (req, res, next) => {
  const {
    user: { id },
  } = req;
  try {
    const items = await Cart.findAll({
      where: {
        userId: id,
        // orderId: null,
      },
      // attributes: ['quantity', 'productId'],
      include: [
        {
          model: Item,
          attributes: ['id', 'name', 'images', 'description', 'price'],
        },
      ],
    });
    let total = 0;
    const flatItems = items?.length
      ? items.map(({ dataValues: { quantity, Items } }) => {
          total += quantity * Items[0].price;
          return {
            quantity,
            item: Items[0],
          };
        })
      : [];
    responseHelper(res, 200, 'Items found', { total, items: flatItems });
  } catch (error) {
    responseHelper(res, 500, 'Unable to process the request');
  }
};
