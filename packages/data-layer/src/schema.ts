const { gql } = require("apollo-server");

export const schema = gql`
  """
  a Law is the highest level, a compilation of articles splitted into sections
  """
  type Law {
    title: String
    author: String
    # author: User
    sections: [Section]
  }

  """
  a Section is a part of a law, it usually helps splitting the topics for easier understanding
  """
  type Section {
    title: String
    description: String
    #   author: User
    articles: [Article]
  }

  """
  an Article is the reference under which are found specific points of a Law
  """
  type Article {
    summary: String
    alineas: [Alinea]
    # author: User
  }

  """
  an Alinea is a sentence or a paragraph that should be considered a unit of law, the minimum to consider together
  """
  type Alinea {
    content: String
    # author: User
  }

  # type User {
  #   name: String
  #   age: Number
  # }

  type Query {
    laws: [Law]
  }
`;
