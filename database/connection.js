const Sequelize = require('sequelize')

const Conn = new Sequelize(
  'hyrule',
  'postgres',
  'password123',
  {
    dialect: 'postgres',
    host: 'localhost'
  }
)

module.exports = Conn;