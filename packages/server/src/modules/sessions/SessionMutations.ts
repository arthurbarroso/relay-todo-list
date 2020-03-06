import { GraphQLString, GraphQLInputObjectType } from "graphql";
import { SessionType } from "../rootType";
import { login } from "./SessionLoader";

const loginMutation = {
  type: SessionType,
  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: "SessionInput",
        fields: {
          username: {
            type: GraphQLString
          },
          password: {
            type: GraphQLString
          }
        }
      })
    }
  },
  resolve: (parentValues, args, context, info) => {
    return login(parentValues, args, context, info);
  }
};

export { loginMutation };
