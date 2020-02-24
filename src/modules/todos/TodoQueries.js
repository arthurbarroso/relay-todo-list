import { GraphQLString, GraphQLList } from 'graphql';
import TodoType from './TodoType';

import { getTodos } from './TodoLoader';

const todoQuery = {
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
};

export { todoQuery };
