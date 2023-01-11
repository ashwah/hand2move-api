const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLScalarType 
} = require('graphql');

const Kind = require('graphql/language')

const TimestampType = new GraphQLScalarType({
  name: 'Timestamp',
  serialize(date) {
    return (date instanceof Date) ? date.getTime() : null
  },
  parseValue(date) {
    try           { return new Date(value); }
    catch (error) { return null; }
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10));
    }
    else if (ast.kind === Kind.STRING) {
      return this.parseValue(ast.value);
    }
    else {
      return null;
    }
  },
});

const Db = require('./database');

const Job = new GraphQLObjectType({
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
        type: GraphQLList(What),
        resolve (job) {
          return job.getWhats();
        }
      }   
    };
  }
});

const What = new GraphQLObjectType({
  name: 'What',
  description: 'The specs of individual items',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve (what) {
          return what.id;
        }
      },
      job_id: {
        type: GraphQLInt,
        resolve (what) {
          return what.job_id;
        }
      },
      status: {
        type: GraphQLString,
        resolve (what) {
          return what.status;
        }
      },
      length: {
        type: GraphQLInt,
        resolve (what) {
          return what.length;
        }
      },
      width: {
        type: GraphQLInt,
        resolve (what) {
          return what.width;
        }
      },
      height: {
        type: GraphQLInt,
        resolve (what) {
          return what.height;
        }
      },
      weight: {
        type: GraphQLInt,
        resolve (what) {
          return what.weight;
        }
      },
      is_fragile: {
        type: GraphQLBoolean,
        resolve (what) {
          return what.is_fragile;
        }
      },
      is_temperature_sensitive: {
        type: GraphQLBoolean,
        resolve (what) {
          return what.is_temperature_sensitive;
        }
      },
      job: {
        type: Job,
        resolve (what) {
          return what.getJob()
        }
      }
    }
  }
})

const Chat = new GraphQLObjectType({
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
        type: GraphQLList(Message),
        resolve (chat) {
          return chat.getMessages();
        }
      }
    };
  }
});

const Message = new GraphQLObjectType({
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
        type: Chat,
        resolve (message) {
          return message.getChat()
        }
      }
    };
  }
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields: () => {
    return {
      jobs: {
        type: new GraphQLList(Job),
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
        type: new GraphQLList(What),
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
        type: new GraphQLList(Chat),
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
        type: new GraphQLList(Message),
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
    };
  }
})

const Schema = new GraphQLSchema({
  query: Query,
  // mutation: Mutation
});

module.exports = Schema;