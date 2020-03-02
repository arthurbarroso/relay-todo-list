import { GraphQLString, GraphQLObjectType, GraphQLNonNull } from "graphql";
import { connectionArgs, globalIdField, fromGlobalId } from "graphql-relay";
import { TodoType, TodoConnection } from "./rootType";
import { loadTodos } from "./todos/TodoLoader";
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

    todos: {
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
