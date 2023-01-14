const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
} = require('graphql');

const Chat = (types) => new GraphQLObjectType({
  name: 'Chat',
  description: 'Chat listing',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve (chat) {
          return chat.id;
        }
      },
      user_chat_id: {
        type: GraphQLInt,
        resolve (chat) {
          return chat.user_chat_id;
        }
      },
      messages: {
        type: GraphQLList(types.Message),
        resolve (chat) {
          return chat.getMessages();
        }
      }
    };
  }
});

module.exports = Chat