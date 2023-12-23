'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Batch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Batch.init({
    start_date: DataTypes.STRING,
    batch_timing: DataTypes.STRING,
    Satus: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Batch',
  });
  return Batch;
};