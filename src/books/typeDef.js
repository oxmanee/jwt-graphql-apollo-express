import { gql } from "apollo-server-express";

export default gql`
  type Book {
    _id: ID
    title: String!
    pageCount: Int!
    description: String!
    status: String!
    authors: [String!]!
    categories: [String!]!
  }

  input BookInput {
    title: String!
    pageCount: Int!
    description: String!
    status: String!
    authors: [String!]!
    categories: [String!]!
  }

  extend type Query {
    getBooks: [Book!]!
  }

  extend type Mutation {
    createBook(input: BookInput): Book
    updateBook(_id: ID!, input: BookInput): Book
    deleteBook(_id: ID!): Book
  }
`;
