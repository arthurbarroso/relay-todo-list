import { GraphQLSchema, GraphQLObjectType } from "graphql";

import QueryType from "./modules/QueryType";
import MutationType from "./modules/MutationType";
import rootSubscription from "./modules/rootSubscription";

export default new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
  subscription: new GraphQLObjectType({
    name: "RootSubscriptionType",
    fields: {
      ...rootSubscription
    }
  })
});
