const Sequelize = require('sequelize')

const def = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  user_id: {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.STRING
  }
};

const options = { 
  underscored: true 
}

module.exports = function (Conn) {
  const Job = Conn.define('job', def, options);
  return Job;
}