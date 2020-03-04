import "dotenv/config";
import { ApolloServer, PubSub } from "apollo-server";
import { Request } from "express";
import mongoose from "mongoose";
import schema from "./schema";
import GraphQLContext from "./modules/context/GraphQLContext";

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true
});

const pubsub = new PubSub();

const server = new ApolloServer({
  schema,
  playground: true,
  context: (req: Request) =>
    ({
      req,
      pubsub
    } as GraphQLContext)
});

server.setGraphQLPath("/graphql");

export default server;
