import { GraphQLString, GraphQLBoolean, GraphQLInputObjectType } from 'graphql';
import TodoType from './TodoType';

// import UserType from '../users/UserType';

import { createTodo, updateTodo, deleteTodo } from './TodoLoader';

const createTodoMutation = {
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
          author: {
            type: GraphQLString,
          },
        },
      }),
    },
  },
};

const updateTodoMutation = {
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
};

const deleteTodoMutation = {
  type: TodoType,
  resolve: (value, { id }) => {
    return deleteTodo(value, id);
  },
  args: {
    id: {
      type: GraphQLString,
    },
  },
};

export { createTodoMutation, updateTodoMutation, deleteTodoMutation };
