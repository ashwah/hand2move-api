// const Express = require('express');
// const { GraphQlHTTP } = require('express-graphql');
// const Schema = require('./schema');

// // Config
// const APP_PORT = 3000;

// // Start
// const app = Express();

// // GraphQL
// app.use('/graphql', GraphQlHTTP({
//   schema: Schema,
//   pretty: true,
//   graphiql: true
// }));

// app.listen(APP_PORT, ()=> {
//   console.log(`App listening on port ${APP_PORT}`);
// });
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const Schema = require('./schema'); 

const app = express();
 
app.use(
  '/graphql',
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  }),
);
 
app.listen(4000);