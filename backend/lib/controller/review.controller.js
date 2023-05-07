const { responseHelper } = require('../helper/responseHelper');

const { sequelize, Order, Review } = require('../db/model');
const { Op } = require('sequelize');

module.exports.postReview = async (req, res, next) => {
  const {
    body: { stars, comment, productId },
    user: { id },
  } = req;
  try {
    const orders = await Order.findAll({
      where: {
        [Op.and]: [
          { userId: id },
          sequelize.where(
            sequelize.fn(
              'JSON_CONTAINS',
              sequelize.col('itemId'),
              sequelize.literal(`"${productId}"`)
            ),
            1
          ),
        ],
      },
    });
    if (!orders.length) {
      throw new Error(
        'You cannot post a review as you have not bought this item yet!'
      );
    }
    const review = await Review.create({
      productId,
      userId: id,
      stars,
      comment,
    });
    responseHelper(res, 200, 'Review posted!', review);
  } catch (error) {
    responseHelper(res, 500, error.message);
  }
};

module.exports.editReview = async (req, res, next) => {
  const {
    body: { stars = null, comment = null, id },
    user: { id: userId },
  } = req;
  try {
    const editStars = stars ? { stars } : {};
    const editComment = comment ? { stars } : {};
    const updatedReview = await Review.update(
      {
        where: { userId, id },
      },
      {
        ...editStars,
        ...editComment,
      }
    );
    responseHelper(res, 200, 'Review edited!', updatedReview);
  } catch (error) {
    responseHelper(res, 500, error.message);
  }
};

module.exports.deleteReview = async (req, res, next) => {
  const {
    params: { id },
    user: { id: userId },
  } = req;
  try {
    await Review.destroy({
      id,
      userId,
    });
    responseHelper(res, 200, 'Review deleted');
  } catch (error) {
    responseHelper(res, 500, error.message);
  }
};
