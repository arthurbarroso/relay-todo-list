import { GraphQLSchema, GraphQLObjectType } from "graphql";

import QueryType from "./modules/QueryType";
import rootMutation from "./modules/rootMutation";
import rootSubscription from "./modules/rootSubscription";

export default new GraphQLSchema({
  query: QueryType,
  mutation: new GraphQLObjectType({
    name: "RootMutationType",
    fields: {
      ...rootMutation
    }
  }),
  subscription: new GraphQLObjectType({
    name: "RootSubscriptionType",
    fields: {
      ...rootSubscription
    }
  })
});
