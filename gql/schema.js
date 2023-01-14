const {GraphQLSchema} = require('graphql');

// We inject our types so that they can reference one another.
const JobInject = require('./objects/job');
const WhatInject = require('./objects/what');
const ChatInject = require('./objects/chat');
const MessageInject = require('./objects/message');
const QueryInject = require('./query');
const MutationInject = require('./mutation');

const types = {};
types.Job = JobInject(types);
types.What = WhatInject(types);
types.Chat = ChatInject(types);
types.Message = MessageInject(types);
types.Query = QueryInject(types);
types.Mutation = MutationInject(types);

const Query = types.Query;
const Mutation = types.Mutation;

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

module.exports = Schema;