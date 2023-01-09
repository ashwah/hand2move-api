'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemSpec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ItemSpec.init({
    length: DataTypes.INTEGER,
    width: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    is_fragile: DataTypes.BOOLEAN,
    is_temperature_sensitive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ItemSpec',
  });
  return ItemSpec;
};