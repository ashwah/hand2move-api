const Sequelize = require('sequelize')

const def = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
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