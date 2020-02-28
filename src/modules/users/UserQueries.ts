import { GraphQLString, GraphQLList } from 'graphql';
import { getUsers } from './UserLoader';

import { UserType } from '../rootType';

const userQuery = {
  type: GraphQLList(UserType),
  resolve: (parentValues, args, context, info) => {
    return getUsers(parentValues, args, context, info);
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

export { userQuery };
