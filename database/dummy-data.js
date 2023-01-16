const { faker } = require('@faker-js/faker')
const _ = require('lodash')
const Db = require('./db');

Db.sync({ force: true }).then(()=> {
  // Array to hold user IDs.
  let user_ids = [];
  _.times(10, () => {
    Db.models.user.create({
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
    }).then(user => {
      // Add the user ID to the array.
      user_ids.push(user.id);
      Db.models.chat.create({
        user_chat_id: faker.datatype.number({ min: 1, max: 100 }),
      }).then(chat => {
        // Make a random number of messages.
        let m = faker.datatype.number({ min:50, max: 100 })
        // Pick two random user IDs.
        var user_id1 = user_ids[Math.floor(Math.random()*user_ids.length)];
        var user_id2 = user_ids[Math.floor(Math.random()*user_ids.length)];
        _.times(m, () => {
          Db.models.message.create({
            chat_id: chat.id,
            user_id: Math.random() < 0.5 ? user_id1 : user_id2,
            message: faker.science.chemicalElement().name,
            date: faker.datatype.number({ min: 1641759318000, max: 1673295343000 }),
          });
        });
      }).then(() => {
        // Get a random status from this array.
        let statuses = ['New', 'Awaiting payment', 'Active', 'Complete', 'Cancelled'];
        var status = statuses[Math.floor(Math.random()*statuses.length)];
        Db.models.job.create({
          user_id: user.id,
          status: status,
          price: faker.datatype.float({min: 1.00, max: 50.00, precision: 0.01})
        }).then(job => {
          // Add a random number of 'whats' to this job.
          let n = faker.datatype.number({ min: 1, max: 2 });
          _.times(n, () => {
            job.createWhat({
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
  });
});