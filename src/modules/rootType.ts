import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } from 'graphql';

import { getTodos } from './users/UserLoader';
import { findAuthor } from './todos/TodoLoader';

export const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: {
      fragment: 'fragment UserFields on User id { id }',
      type: GraphQLNonNull(GraphQLString),
    },
    username: {
      type: GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
    },
    todos: {
      type: GraphQLList(TodoType), //eslint-disable-line
      resolve: (parentValues, args, context, info) => {
        return getTodos(parentValues, args, context, info);
      },
    },
  }),
});

export const TodoType = new GraphQLObjectType({
  name: 'TodoType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString),
    },
    title: {
      type: GraphQLNonNull(GraphQLString),
    },
    content: {
      type: GraphQLNonNull(GraphQLString),
    },
    done: {
      type: GraphQLNonNull(GraphQLBoolean),
    },
    author: {
      type: GraphQLNonNull(UserType),
      resolve: (parentValues, args, context, info) => {
        return findAuthor(parentValues, args, context, info);
      },
    },
  },
});

export const SessionType = new GraphQLObjectType({
  name: 'SessionType',
  fields: {
    token: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
});
