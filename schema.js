const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

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
          return what.is_fragile;
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
      }
    };
  }
})

const Schema = new GraphQLSchema({
  query: Query,
  // mutation: Mutation
});

module.exports = Schema;