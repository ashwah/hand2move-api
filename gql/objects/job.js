const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require('graphql');

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
      whats: {
        type: GraphQLList(types.What),
        resolve (job) {
          return job.getWhats();
        }
      }   
    };
  }
});

module.exports = Job