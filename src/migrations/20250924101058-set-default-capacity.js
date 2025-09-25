'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Airplanes', 'capacity', {
      type: Sequelize.INTEGER,
      defaultValue: 100       // your default value
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Airplanes', 'capacity', {
      type: Sequelize.INTEGER,
    });
  }
};
