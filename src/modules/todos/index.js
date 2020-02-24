import {
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLInputObjectType,
} from 'graphql';
import TodoType from './TodoType';

import { getTodos, createTodo, updateTodo } from './TodoLoader';

export const queries = {
  todos: {
    type: GraphQLList(TodoType),
    resolve: (value, { id, contain }) => {
      return getTodos(value, id, contain);
    },
    args: {
      id: {
        type: GraphQLString,
      },
      contain: {
        type: GraphQLString,
      },
    },
  },
};

export const mutations = {
  createTodo: {
    type: TodoType,
    resolve: createTodo,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'TodoInput',
          fields: {
            title: {
              type: GraphQLString,
            },
            content: {
              type: GraphQLString,
            },
            done: {
              type: GraphQLBoolean,
            },
          },
        }),
      },
    },
  },
  updateTodo: {
    type: TodoType,
    resolve: (value, { id, input }) => {
      return updateTodo(value, id, input);
    },
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'TodoUpdateInput',
          fields: {
            title: {
              type: GraphQLString,
            },
            content: {
              type: GraphQLString,
            },
            done: {
              type: GraphQLBoolean,
            },
          },
        }),
      },
      id: {
        type: GraphQLString,
      },
    },
  },
};
