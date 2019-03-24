const { ApolloServer } = require("apollo-server");

import { schema } from "./schema";

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const laws = [
  {
    title: "French Constitution",
    author: "French",
    sections: [
      {
        title: "une section",
        description: "du president de la republique",
        articles: [
          {
            summary: "elections",
            alineas: [
              {
                content: "tous les 5 ans"
              },
              {
                content: "elu au suffrage universel"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "American Revolution",
    author: "American"
  }
];

// const typeDefs = schema;

// // Type definitions define the "shape" of your data and specify
// // which ways the data can be fetched from the GraphQL server.
// const typeDefs = gql`
//   # Comments in GraphQL are defined with the hash (#) symbol.

//   # This "Book" type can be used in other type declarations.
//   type Law {
//     title: String
//     author: String
//   }

//   # The "Query" type is the root of all GraphQL queries.
//   # (A "Mutation" type will be covered later on.)
//   type Query {
//     laws: [Law]
//   }
// `;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    laws: () => laws
  }
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs: schema, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
