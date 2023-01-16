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
  },
  price: {
    type: Sequelize.DECIMAL
  },
  date: {
    type: Sequelize.DATE
  },
};

const options = { 
  underscored: true 
}

module.exports = function (Conn) {
  const Job = Conn.define('job', def, options);
  return Job;
}