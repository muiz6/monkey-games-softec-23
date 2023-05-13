'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Game, {
        foreignKey: 'itemId',
        as: 'game',
      });
      this.hasOne(models.Gear, {
        foreignKey: 'itemId',
        as: 'gear',
      });
      this.belongsTo(models.Cart, {
        foreignKey: 'productId',
      });
      this.belongsTo(models.Favourite, {
        foreignKey: 'productId',
      });
      this.hasMany(models.Review, {
        foreignKey: 'productId',
      });
    }
  }
  Item.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      inventoryCount: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      type: DataTypes.ENUM('game', 'gear'),
      images: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: 'Item',
    }
  );
  return Item;
};
