import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";

import auth from "./auth";
import users from "./users";
import books from "./books";

const startServer = async () => {
  const app = express();

  const typeDef = gql`
    type Query
    type Mutation
  `;

  const server = new ApolloServer({
    typeDefs: [typeDef, auth.typeDef, users.typeDef, books.typeDef],
    resolvers: [auth.resolvers, users.resolvers, books.resolvers],
    context: ({ req }) => req,
  });

  server.applyMiddleware({ app });

  await mongoose.connect("mongodb://localhost:27017/noti_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
