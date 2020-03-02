import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLObjectTypeConfig
} from "graphql";

import { globalIdField } from "graphql-relay";
import GraphQLContext from "./context/GraphQLContext";

import { getTodos } from "./users/UserLoader";
import Todo, { findAuthor } from "./todos/TodoLoader";

import { nodeInterface } from "../node/nodeInterface";
import { connectionDefinitions } from "../connection/ConnectionType";

export const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLString)
    },
    username: {
      type: GraphQLNonNull(GraphQLString)
    },
    email: {
      type: GraphQLNonNull(GraphQLString)
    },
    todos: {
      type: GraphQLList(TodoType), //eslint-disable-line
      resolve: (parentValues, args, context, info) => {
        return getTodos(parentValues, args, context, info);
      }
    }
  })
});

export const SessionType = new GraphQLObjectType({
  name: "SessionType",
  fields: {
    token: {
      type: GraphQLNonNull(GraphQLString)
    }
  }
});

type ConfigType = GraphQLObjectTypeConfig<Todo, GraphQLContext>;

const TodoTypeConfig: ConfigType = {
  name: "Todo",
  description: "Represents todo",
  fields: () => ({
    id: globalIdField("Todo"),
    _id: {
      type: GraphQLNonNull(GraphQLString),
      description: "MongoDB _id",
      resolve: todo => todo[0]._id
    },
    title: {
      type: GraphQLString,
      resolve: todo => todo[0].title
    },
    content: {
      type: GraphQLString,
      resolve: todo => todo[0].content
    },
    done: {
      type: GraphQLBoolean,
      resolve: todo => todo[0].done
    },
    createdAt: {
      type: GraphQLString,
      resolve: todo => todo[0].createdAt
    },
    updatedAt: {
      type: GraphQLString,
      resolve: todo => todo[0]
    },
    author: {
      type: GraphQLNonNull(UserType),
      resolve: todo => findAuthor(todo[0], "", "", "")
    }
  }),
  interfaces: () => [nodeInterface]
};

export const TodoType = new GraphQLObjectType(TodoTypeConfig);

export const TodoConnection = connectionDefinitions({
  name: "Todo",
  nodeType: TodoType
});
