const { sequelize, Favourite, Item } = require('../db/model');
const { responseHelper } = require('../helper/responseHelper');

module.exports.favouriteToggleSwitch = async (req, res, next) => {
  const {
    params: { productid },
    user: { id },
  } = req;
  try {
    const result = await sequelize.query(
      `Call favouriteToggle(${id},${productid});`
    );
    responseHelper(res, 200, '', result);
  } catch (error) {
    responseHelper(res, 500, 'Unable to process the request');
  }
};

module.exports.getFavouriteItems = async (req, res, next) => {
  const {
    user: { id },
  } = req;
  try {
    const items = await Favourite.findAll({
      where: {
        userId: id,
      },
      include: [
        {
          model: Item,
          attributes: ['id', 'name', 'images', 'description'],
        },
      ],
    });
    const flatItems = items?.length
      ? items.map(({ dataValues: { Items } }) => Items[0])
      : [];
    responseHelper(res, 200, 'Items found', flatItems);
  } catch (error) {
    responseHelper(res, 500, 'Unable to process the request');
  }
};
