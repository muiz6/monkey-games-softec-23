'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cvv: { type: Sequelize.INTEGER },
      cardNumber: { type: Sequelize.STRING },
      cardName: { type: Sequelize.STRING },
      cardExpiry: { type: Sequelize.DATE },
      paymentDate: { type: Sequelize.DATE, default: new Date(Date.now()) },
      paymentStatus: { type: Sequelize.STRING, default: 'CONFIRM' },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Payments');
  },
};
