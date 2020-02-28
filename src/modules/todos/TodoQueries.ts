import { GraphQLString, GraphQLList } from 'graphql';
import { TodoType } from '../rootType';

import { getTodos } from './TodoLoader';

const todoQuery = {
  type: GraphQLList(TodoType),
  resolve: (parentValue, args, context, info) => {
    return getTodos(parentValue, args, context, info);
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
