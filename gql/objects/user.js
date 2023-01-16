const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} = require('graphql');

const User = (types) => new GraphQLObjectType({
  name: 'User',
  description: 'User listing',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve (user) {
          return user.id;
        }
      },
      first_name: {
        type: GraphQLString,
        resolve (user) {
          return user.first_name;
        }
      },
      last_name: {
        type: GraphQLString,
        resolve (user) {
          return user.last_name;
        }
      },
      jobs: {
        type: GraphQLList(types.Job),
        resolve (user) {
          return user.getJobs();
        }
      },
      messages: {
        type: GraphQLList(types.Message),
        resolve (user) {
          return user.getMessages();
        }
      },
    };
  }
});

module.exports = User