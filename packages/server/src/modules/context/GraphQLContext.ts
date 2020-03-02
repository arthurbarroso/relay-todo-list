import { Request } from "express";
import { PubSub } from "apollo-server";

export default interface GraphQLContext {
  req: Request;
  pubsub: PubSub;
}
