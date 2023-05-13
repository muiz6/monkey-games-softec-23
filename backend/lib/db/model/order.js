'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      paymentId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Payments',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      itemId: {
        type: DataTypes.JSON,
      },
      orderStatus: {
        type: DataTypes.STRING,
        defaultValue: 'COMPLETED',
      },
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
