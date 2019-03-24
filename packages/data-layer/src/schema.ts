const { gql } = require("apollo-server");

export const schema = gql`
  type Law {
    title: String
    author: String
    # author: User
    # sections: [Section]
  }

  # type Section {
  #   title: String
  #   description: String
  #   author: User
  #   articles: [Article]
  # }

  # type Article {
  #   summary: String
  #   alineas: [Alinea]
  #   author: User
  # }

  # type Alinea {
  #   content: String
  #   author: User
  # }

  # type User {
  #   name: String
  #   age: Number
  # }

  type Query {
    laws: [Law]
  }
`;
