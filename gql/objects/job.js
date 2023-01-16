const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLFloat,
} = require('graphql');
const TimestampType = require('../types/timestamp');

const Job = (types) => new GraphQLObjectType({
  name: 'Job',
  description: 'Job listing',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve (job) {
          return job.id;
        }
      },
      user_id: {
        type: GraphQLInt,
        resolve (job) {
          return job.user_id;
        }
      },
      status: {
        type: GraphQLString,
        resolve (job) {
          return job.status;
        }
      },
      price: {
        type: GraphQLFloat,
        resolve (job) {
          return job.price;
        }
      },
      date: {
        type: TimestampType,
        resolve (job) {
          return job.date;
        }
      },
      whats: {
        type: GraphQLList(types.What),
        resolve (job) {
          return job.getWhats();
        }
      },
      user: {
        type: types.User,
        resolve (job) {
          return job.getUser();
        }
      },
    };
  }
});

module.exports = Job