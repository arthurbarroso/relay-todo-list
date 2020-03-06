import { GraphQLObjectType } from "graphql";

import TodoMutations from "./todos/mutations";
import UserMutations from "./users/mutations";
import { sessionMutations } from "./sessions";

export default new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...UserMutations,
    ...TodoMutations,
    ...sessionMutations
  })
});
