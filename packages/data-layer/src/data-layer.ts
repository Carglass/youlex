const { ApolloServer } = require("apollo-server");
import { connect } from "mongoose";

import { schema } from "./schema";
import createStore from "./utils";
import MongoAPI from "./datasources/mongo";
import resolvers from "./resolvers";

const store = createStore();

const dataSources = () => ({
  mongoAPI: new MongoAPI({ store })
});

// TODO update context with the user when auth is available
const context = async ({ req }) => {
  return {};
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources,
  context
});

// Connect to the Mongo DB
// TODO manage the asynchrony with the web server
connect("mongodb://localhost/youlex-dev");

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
