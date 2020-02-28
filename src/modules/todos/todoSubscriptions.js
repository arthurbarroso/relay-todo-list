// import { GraphQLString, GraphQLList } from 'graphql';

import { TodoType } from '../rootTypes';

const todoSubscriptions = {
  type: TodoType,
  subscribe: (parentValues, args, context) =>
    context.pubsub.asyncIterator('TODO_ADDED'),
  resolve: payload => {
    return payload.createdTodo;
  },
};

export { todoSubscriptions };
