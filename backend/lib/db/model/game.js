'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Item, {
        foreignKey: 'itemId',
      });
    }
  }
  Game.init(
    {
      name: DataTypes.STRING,
      itemId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Items',
          key: 'id',
        },
      },
      platform: DataTypes.STRING,
      category: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: 'Game',
    }
  );
  return Game;
};
