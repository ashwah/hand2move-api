const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const Mutation = (types) => new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addJob: {
      type: types.Job,
      args: {
        user_id: { type : GraphQLInt },
        status: { type : GraphQLString }
      },
      resolve(root, args) {
        return Db.models.job.create({
          user_id: args.user_id,
          status: args.status,
        });
      }
    }
  }
});

module.exports = Mutation