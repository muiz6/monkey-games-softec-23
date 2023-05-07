const { Item, Gear, Game, Review } = require('../db/model');
const { responseHelper } = require('../helper/responseHelper');
module.exports.createItem = async (req, res, next) => {
  const {
    body: {
      name,
      description,
      price,
      inventoryCount,
      type,
      platform,
      category,
    },
    files,
  } = req;
  try {
    const images = files.map((file) => file.path);
    const item = await Item.create({
      name,
      description,
      price,
      inventoryCount,
      type,
      images,
    });
    const subModel = type === 'game' ? Game : Gear;
    const metadata = await subModel.create({
      itemId: item.dataValues.id,
      platform,
      category,
    });
    return responseHelper(res, 200, 'Item created successfully', item);
  } catch (error) {
    responseHelper(res, 500, error.message);
  }
};

module.exports.getItems = async (req, res, next) => {
  const {
    params: { pageno },
  } = req;
  try {
    const items = await Item.findAll({
      limit: 10,
      offset: (pageno - 1) * 10,
      attributes: [
        'name',
        'description',
        'price',
        'inventoryCount',
        'images',
        'type',
      ],
      include: [
        {
          model: Game,
          attributes: ['platform', 'category'],
          as: 'game',
        },
        {
          model: Gear,
          attributes: ['platform', 'category'],
          as: 'gear',
        },
      ],
    });
    return responseHelper(res, 200, 'Items fetched successfully', items);
  } catch (error) {
    responseHelper(res, 500, 'Failed to get data');
  }
};

module.exports.getItemDetails = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    const item = await Item.findByPk(id, {
      attributes: [
        'name',
        'description',
        'price',
        'inventoryCount',
        'images',
        'type',
      ],
      include: [
        {
          model: Game,
          attributes: ['platform', 'category'],
          as: 'game',
        },
        {
          model: Gear,
          attributes: ['platform', 'category'],
          as: 'gear',
        },
        {
          model: Review,
        },
      ],
    });
    return responseHelper(res, 200, 'Item fetched successfully', item);
  } catch (error) {
    responseHelper(res, 500, 'unable to get data!');
  }
};

module.exports.deleteItem = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    await Item.destroy({
      where: {
        id,
      },
    });
    responseHelper(res, 200, 'Item deleted successfully');
  } catch (error) {
    responseHelper(res, 500, 'Unable to delete item');
  }
};
