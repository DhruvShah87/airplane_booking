'use strict';
const { ENUMS } = require('../utils/common')
const { BUSINESS,
  ECONOMY,
  PREMIUM_ECONOMY,
  FIRST_CLASS } = ENUMS.SEAT_TYPES

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
            this.belongsTo(models.Airplane,{
        foreignKey: 'airplaneId',
      })
    }
  }
  seat.init({
    row: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    col: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    airplaneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {

      type: DataTypes.ENUM,
      values: [BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS],
      defaultValue: ECONOMY,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'seat',
  });
  return seat;
};