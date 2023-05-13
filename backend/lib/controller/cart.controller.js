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
    const [items] = await sequelize.query(
      'SELECT `Cart`.`quantity`, `Items`.`id` AS `id`, `Items`.`name` AS `name`, `Items`.`images` AS `images`, `Items`.`description` AS `description`,`Items`.`price` AS `price` FROM `Carts` AS `Cart` LEFT OUTER JOIN `Items` AS `Items` ON `Cart`.`productId` = `Items`.`id` WHERE `Cart`.`userId` =' +
        id
    );
    let total = 0;
    const flatItems = items?.length
      ? items.forEach((item) => (total = item.price * item.quantity))
      : [];
    responseHelper(res, 200, 'Items found', { total, items });
  } catch (error) {
    responseHelper(res, 500, 'Unable to process the request');
  }
};
