const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

const What = (types) => new GraphQLObjectType({
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
        type: types.Job,
        resolve (what) {
          return what.getJob()
        }
      }
    }
  }
})

module.exports = What