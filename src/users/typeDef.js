import { gql } from "apollo-server-express";

export default gql`
  type User {
    _id: ID
    username: String!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }

  input UserInput {
    username: String
    first_name: String
    last_name: String
    email: String
    password: String
  }

  extend type Query {
    getUsers: [User!]!
  }

  extend type Mutation {
    createUser(input: UserInput): User
    updateUser(_id: ID!, input: UserInput): User
    deleteUser(_id: ID!): User
  }
`;
