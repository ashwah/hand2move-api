const Sequelize = require('sequelize')

const def = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  user_chat_id: {
    type: Sequelize.INTEGER
  }
};

const options = { 
  underscored: true 
}

module.exports = function (Conn) {
  const Chat = Conn.define('chat', def, options);
  return Chat;
}