'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobItem.init({
    item_id: DataTypes.INTEGER,
    job_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JobItem',
  });
  return JobItem;
};