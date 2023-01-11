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
  }
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
  }
},
{ 
  underscored: true 
});

const Chat = Conn.define('chat', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  user_chat_id: {
    type: Sequelize.INTEGER
  }
},
{ 
  underscored: true 
});

const User = Conn.define('user', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },

  name: {
    type: Sequelize.STRING
  }
},
{ 
  underscored: true 
});

const Message = Conn.define('message', {
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
},
{ 
  underscored: true 
});


// Relations
Job.hasMany(What);
What.belongsTo(Job);

// User.hasMany(Message);
// Message.belongsTo(User);

Chat.hasMany(Message);
Message.belongsTo(Chat);

// Conn.sync({ force: true }).then(()=> {
//   _.times(10, () => {
//     return Job.create({
//       user_id: faker.datatype.number(),
//     }).then(job => {
//       let n = faker.datatype.number({ min: 1, max: 2 });
//       _.times(n, () => {
//         return job.createWhat({
//           job_id: job.id,
//           length: faker.datatype.number(),
//           status: faker.color.human(),
//           width: faker.datatype.number(),
//           height: faker.datatype.number(),
//           weight: faker.datatype.number(),
//           is_fragile: faker.datatype.boolean(),
//           is_temperature_sensitive: faker.datatype.boolean(),
//         }); 
//       })
//     });
//   });

//   _.times(6, () => {
//     return Chat.create({
//       user_chat_id: faker.datatype.number({ min: 1, max: 100 }),
//     }).then(chat => {
//       return User.create({
//         name: faker.name.fullName(),
//       }).then(user1 => {
//         return User.create({
//           name: faker.name.fullName(),
//         }).then(user2 => {
//           let m = faker.datatype.number({ min:50, max: 100 })
//           _.times(m, () => {
//             Message.create({
//               chat_id: chat.id,
//               chatId: chat.id,
//               user_id: Math.random() < 0.5 ? user1.id : user2.id,
//               message: faker.science.chemicalElement().name,
//               date: faker.datatype.number({ min: 1641759318000, max: 1673295343000 }),
//             });
//           });
//         });
//       });
//     });
//   });
// });

module.exports = Conn;