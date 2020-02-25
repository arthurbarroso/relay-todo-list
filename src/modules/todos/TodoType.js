import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

import UserType from '../users/UserType';
import { getUser } from '../users/UserLoader';

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
      type: UserType,
      resolve(parent) {
        console.log(parent);
      },
    },
  },
});
