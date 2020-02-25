import { GraphQLString, GraphQLList } from 'graphql';
import { getUser } from './UserLoader';

import UserType from './UserType';

const userQuery = {
  type: GraphQLList(UserType),
  resolve: (value, { id, contain }, ctx, info) => {
    return getUser(value, id, contain, info);
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
