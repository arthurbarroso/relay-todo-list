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

import User, { getTodos } from "./users/UserLoader";
import Todo, { findAuthor } from "./todos/TodoLoader";

import { nodeInterface } from "../node/nodeInterface";
import { connectionDefinitions } from "../connection/ConnectionType";

export const SessionType = new GraphQLObjectType({
  name: "SessionType",
  fields: {
    token: {
      type: GraphQLNonNull(GraphQLString)
    }
  }
});

type TodoConfigType = GraphQLObjectTypeConfig<Todo, GraphQLContext>;

const TodoTypeConfig: TodoConfigType = {
  name: "Todo",
  description: "Represents todo",
  fields: () => ({
    id: globalIdField("Todo"),
    _id: {
      type: GraphQLNonNull(GraphQLString),
      description: "MongoDB _id",
      resolve: todo => todo._id
    },
    title: {
      type: GraphQLString,
      resolve: todo => todo.title
    },
    content: {
      type: GraphQLString,
      resolve: todo => todo.content
    },
    done: {
      type: GraphQLBoolean,
      resolve: todo => todo.done
    },
    createdAt: {
      type: GraphQLString,
      resolve: todo => todo.createdAt
    },
    updatedAt: {
      type: GraphQLString,
      resolve: todo => todo[0]
    },
    author: {
      type: GraphQLNonNull(UserType),
      resolve: todo => findAuthor(todo, "", "", "")
    }
  }),
  interfaces: () => [nodeInterface]
};

export const TodoType = new GraphQLObjectType(TodoTypeConfig);

export const TodoConnection = connectionDefinitions({
  name: "Todo",
  nodeType: TodoType
});

type UserConfigType = GraphQLObjectTypeConfig<User, GraphQLContext>;

const UserTypeConfig: UserConfigType = {
  name: "User",
  description: "Represents user",
  fields: () => ({
    id: globalIdField("User"),
    _id: {
      type: GraphQLNonNull(GraphQLString),
      description: "MongoDB _id",
      resolve: user => user._id
    },
    username: {
      type: GraphQLString,
      resolve: user => user.username
    },
    email: {
      type: GraphQLString,
      resolve: user => user.email
    },
    createdAt: {
      type: GraphQLString,
      resolve: todo => todo.createdAt
    },
    updatedAt: {
      type: GraphQLString,
      resolve: todo => todo
    },
    todos: {
      type: GraphQLList(TodoType),
      resolve: user => getTodos(user, "", "", "")
    }
  }),
  interfaces: () => [nodeInterface]
};

export const UserType = new GraphQLObjectType(UserTypeConfig);

export const UserConnection = connectionDefinitions({
  name: "User",
  nodeType: UserType
});
