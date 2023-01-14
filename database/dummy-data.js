const { faker } = require('@faker-js/faker')
const _ = require('lodash')
const Db = require('./db');

Db.sync({ force: true }).then(()=> {
  _.times(10, () => {
    return Db.models.job.create({
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

  _.times(6, () => {
    return Db.models.chat.create({
      user_chat_id: faker.datatype.number({ min: 1, max: 100 }),
    }).then(chat => {
      return Db.models.user.create({
        name: faker.name.fullName(),
      }).then(user1 => {
        return Db.models.user.create({
          name: faker.name.fullName(),
        }).then(user2 => {
          let m = faker.datatype.number({ min:50, max: 100 })
          _.times(m, () => {
            Db.models.message.create({
              chat_id: chat.id,
              chatId: chat.id,
              user_id: Math.random() < 0.5 ? user1.id : user2.id,
              message: faker.science.chemicalElement().name,
              date: faker.datatype.number({ min: 1641759318000, max: 1673295343000 }),
            });
          });
        });
      });
    });
  });
});