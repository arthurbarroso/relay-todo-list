import {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID
} from "graphql";
import { connectionArgs, globalIdField, fromGlobalId } from "graphql-relay";
import { TodoType, TodoConnection } from "../rootType";
import { loadTodos, load } from "./TodoLoader";
import { nodeField } from "../../node/nodeInterface";
import GraphQLContext from "../context/GraphQLContext";

/*

*/

const todoQuery = new GraphQLObjectType<any, GraphQLContext, any>({
  name: "Query",
  description: "Main query",
  fields: () => ({
    id: globalIdField("Query"),
    node: nodeField,

    todo: {
      type: TodoType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID)
        }
      },
      resolve: async (_, { id }, context) => load(context, fromGlobalId(id).id)
    },

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

export { todoQuery };
