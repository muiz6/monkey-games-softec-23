'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    let query = `CREATE PROCEDURE favouriteToggle(IN user_Id INT, IN product_Id INT)
BEGIN
    DECLARE rowCount INT;
    
    -- Check if the row exists
    SELECT COUNT(*) INTO rowCount
    FROM Favourites
    WHERE userId = user_Id AND productId = product_id;
    
    IF rowCount > 0 THEN
        -- Row exists, delete it
        DELETE FROM Favourites
        WHERE userId = user_id AND productId = product_id;
        SELECT 'Row dropped.';
    ELSE
        -- Row doesn't exist, insert it
        INSERT INTO Favourites (userId, productId,createdAt,updatedAt)
        VALUES (user_id, product_id,NOW(),NOW());
        SELECT 'Row added.';
    END IF;
END;`;
    await queryInterface.sequelize.query(query);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.sequelize.query('DROP PROCEDURE favouriteToggle');
  },
};
