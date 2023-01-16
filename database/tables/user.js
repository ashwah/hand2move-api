const Sequelize = require('sequelize')

const def = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  }
};

const options = { 
  underscored: true 
}

module.exports = function (Conn) {
  const User = Conn.define('user', def, options);
  return User;
}