const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');
const TimestampType = require('../types/timestamp');

const Message = (types) => new GraphQLObjectType({
  name: 'Message',
  description: 'An individual message',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve (message) {
          return message.id;
        }
      },
      chat_id: {
        type: GraphQLInt,
        resolve (message) {
          return message.chat_id;
        }
      },
      user_id: {
        type: GraphQLInt,
        resolve (message) {
          return message.user_id;
        }
      },
      date: {
        type: TimestampType,
        resolve (message) {
          return message.date;
        }
      },
      message: {
        type: GraphQLString,
        resolve (message) {
          return message.message;
        }
      },
      chat: {
        type: types.Chat,
        resolve (message) {
          return message.getChat()
        }
      },
      user: {
        type: types.User,
        resolve (message) {
          return message.getUser()
        }
      },
    };
  }
});

module.exports = Message