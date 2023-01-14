const express = require('express');

// GQL.
const { graphqlHTTP } = require('express-graphql');
const Schema = require('./gql/schema'); 

const cors = require('cors');

const app = express();

// Allow CORS.
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  }),
);
 
app.listen(4000);