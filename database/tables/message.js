const Sequelize = require('sequelize')

const def = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  chat_id: {
    type: Sequelize.INTEGER
  },
  user_id: {
    type: Sequelize.INTEGER
  },
  date: {
    type: Sequelize.DATE
  },
  message: {
    type: Sequelize.STRING
  }
};

const options = { 
  underscored: true 
}

module.exports = function (Conn) {
  const Message = Conn.define('message', def, options);
  return Message;
}