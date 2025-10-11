'use strict';

const airplane = require('../models/airplane');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('seats', [
      {
        airplaneID: '1',
        row: 1,
        col: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneID: '1',
        row: 1,
        col: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneID: '1',
        row: 1,
        col: 'C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneID: '1',
        row: 1,
        col: 'D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneID: '1',
        row: 2,
        col: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneID: '1',
        row: 2,
        col: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneID: '1',
        row: 2,
        col: 'C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneID: '1',
        row: 2,
        col: 'D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneID: '1',
        row: 3,
        col: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        airplaneID: '1',
        row: 3,
        col: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneID: '1',
        row: 3,
        col: 'C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneID: '1',
        row: 3,
        col: 'D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

