const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const Schema = require('./schema'); 
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