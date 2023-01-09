const Sequelize = require('sequelize')
const { faker } = require('@faker-js/faker')
const _ = require('lodash')

const Conn = new Sequelize(
  'hyrule',
  'postgres',
  'password123',
  {
    dialect: 'postgres',
    host: 'localhost'
  }
)

const Job = Conn.define('job', {
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
  // created_at: {
  //   allowNull: false,
  //   type: Sequelize.DATE
  // },
  // updated_at: {
  //   allowNull: false,
  //   type: Sequelize.DATE
  // }
});

const What = Conn.define('what', {
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
  },
  // created_at: {
  //   allowNull: false,
  //   type: Sequelize.DATE
  // },
  // updated_at: {
  //   allowNull: false,
  //   type: Sequelize.DATE
  // }
});


// Relations
Job.hasMany(What);
What.belongsTo(Job);


Conn.sync({ force: true }).then(()=> {
  _.times(10, ()=> {
    return Job.create({
      user_id: faker.datatype.number(),
    }).then(job => {

      let n = faker.datatype.number({ min: 1, max: 2 });
      _.times(n, () => {
        return job.createWhat({
          job_id: job.id,
          length: faker.datatype.number(),
          status: faker.color.human(),
          width: faker.datatype.number(),
          height: faker.datatype.number(),
          weight: faker.datatype.number(),
          is_fragile: faker.datatype.boolean(),
          is_temperature_sensitive: faker.datatype.boolean(),
        }); 
      })
    });
  });
});

module.exports = Conn;