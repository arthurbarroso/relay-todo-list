import { GraphQLString, GraphQLBoolean, GraphQLInputObjectType } from 'graphql';
import TodoType from './TodoType';

// import UserType from '../users/UserType';

import { createTodo, updateTodo, deleteTodo } from './TodoLoader';

const createTodoMutation = {
  type: TodoType,
  resolve: (parentValues, args, context, info) => {
    return createTodo(parentValues, args, context, info);
  },
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
};

const updateTodoMutation = {
  type: TodoType,
  resolve: (parentValues, args, context, info) => {
    return updateTodo(parentValues, args, context, info);
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
  resolve: (parentValues, args, context, info) => {
    return deleteTodo(parentValues, args, context, info);
  },
  args: {
    id: {
      type: GraphQLString,
    },
  },
};

export { createTodoMutation, updateTodoMutation, deleteTodoMutation };
