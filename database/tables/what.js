const Sequelize = require('sequelize')

const def = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  job_id: {
    type: Sequelize.INTEGER
  },
  status: {
    allowNull: false,
    type: Sequelize.STRING
  },
  length: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  width: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  height: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  weight: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  is_fragile: {
    type: Sequelize.BOOLEAN
  },
  is_temperature_sensitive: {
    type: Sequelize.BOOLEAN
  }
};

const options = { 
  underscored: true 
}

module.exports = function (Conn) {
  const What = Conn.define('what', def, options);
  return What;
}