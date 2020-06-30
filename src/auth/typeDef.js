import { gql } from "apollo-server-express";

export default gql`
  type Auth {
    _id: ID
    username: String!
    password: String!
  }

  type Tokens {
    token: String!
  }

  input AuthInput {
    username: String!
    password: String!
  }

  extend type Mutation {
    loginAuth(input: AuthInput): Tokens
  }
`;
