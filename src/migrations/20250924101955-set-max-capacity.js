'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Airplanes', 'capacity', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 100,
      validate: {
        max: 700  // Sequelize-level validation
      }
    });

    // Add a CHECK constraint at DB level
    await queryInterface.sequelize.query(`
      ALTER TABLE Airplanes
      ADD CONSTRAINT capacity_max CHECK (capacity <= 700);
    `);
  },

  async down (queryInterface, Sequelize) {
  }
};
