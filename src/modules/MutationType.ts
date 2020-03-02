import { GraphQLObjectType } from "graphql";

import TodoMutations from "./todos/mutations";
import UserMutations from "./users/mutations";

export default new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...UserMutations,
    ...TodoMutations
  })
});
