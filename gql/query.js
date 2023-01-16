const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
} = require('graphql');
const TimestampType = require('./types/timestamp');
const Db = require('../database/db');

const Query = (types) => new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields: () => {
    return {
      jobs: {
        type: new GraphQLList(types.Job),
        args: {
          id: {
            type: GraphQLInt
          },
          user_id: {
            type: GraphQLInt
          },
          status: {
            type: GraphQLString
          },
        },
        resolve (root, args) {
          return Db.models.job.findAll({ where: args });
        }
      },
      whats: {
        type: new GraphQLList(types.What),
        args: {
          id: {
            type: GraphQLInt
          },
          job_id: {
            type: GraphQLInt
          },
          status: {
            type: GraphQLString
          },
          length: {
            type: GraphQLInt
          },
          width: {
            type: GraphQLInt
          },
          height: {
            type: GraphQLInt
          },
          weight: {
            type: GraphQLInt
          },
          is_fragile: {
            type: GraphQLBoolean
          },
          is_temperature_sensitive: {
            type: GraphQLBoolean
          }
        },
        resolve (root, args) {
          return Db.models.what.findAll({ where: args });
        }
      },
      chats: {
        type: new GraphQLList(types.Chat),
        args: {
          id: {
            type: GraphQLInt
          },
          user_chat_id: {
            type: GraphQLInt
          },
        },
        resolve (root, args) {
          return Db.models.chat.findAll({ where: args });
        }
      },
      messages: {
        type: new GraphQLList(types.Message),
        args: {
          id: {
            type: GraphQLInt
          },
          chat_id: {
            type: GraphQLInt
          },
          user_id: {
            type: GraphQLInt
          },
          date: {
            type: TimestampType
          },
          message: {
            type: GraphQLString
          },
        },
        resolve (root, args) {
          return Db.models.message.findAll({ where: args });
        }
      },
      user: {
        type: new GraphQLList(types.User),
        args: {
          id: {
            type: GraphQLInt
          },
          first_name: {
            type: GraphQLString
          },
          last_name: {
            type: GraphQLString
          },
        },
        resolve (root, args) {
          return Db.models.user.findAll({ where: args });
        }
      },
    };
  }
})

module.exports = Query