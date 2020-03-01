import { GraphQLString, GraphQLList } from "graphql";
import { getUsers } from "./UserLoader";

import { UserType } from "../rootType";

const userQuery = {
  type: GraphQLList(UserType),
  fragment: "fragment userId on User { id }",
  resolve: (parentValues, args, context, info) => {
    return getUsers(parentValues, args, context, info);
  },
  args: {
    username: {
      type: GraphQLString
    }
  }
};

export { userQuery };
