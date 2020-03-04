import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID
} from "graphql";
import { connectionArgs, globalIdField, fromGlobalId } from "graphql-relay";
import { TodoType, TodoConnection, UserType, UserConnection } from "./rootType";
import { loadTodos, load } from "./todos/TodoLoader";
import { loadUsers } from "./users/UserLoader";
import { nodeField } from "../node/nodeInterface";
import GraphQLContext from "./context/GraphQLContext";

/*

*/

export default new GraphQLObjectType<any, GraphQLContext, any>({
  name: "Query",
  description: "Main query",
  fields: () => ({
    id: globalIdField("Todo"),
    node: nodeField,

    users: {
      type: GraphQLNonNull(UserConnection.connectionType),
      args: {
        ...connectionArgs,
        search: {
          type: GraphQLString
        }
      },
      resolve: async (_, args, context) => loadUsers(context, args)
    },

    TodoQuery: {
      type: TodoType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID)
        }
      },
      resolve: async (_, { id }, context) => load(context, fromGlobalId(id).id)
    },

    todosQuery: {
      type: GraphQLNonNull(TodoConnection.connectionType),
      args: {
        ...connectionArgs,
        search: {
          type: GraphQLString
        }
      },
      resolve: async (_, args, context) => loadTodos(context, args)
    }
  })
});
