/*
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

import { findAuthor } from './TodoLoader';

import UserType from '../users/UserType';

export default new GraphQLObjectType({
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

*/