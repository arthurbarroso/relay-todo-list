import { GraphQLString, GraphQLInputObjectType } from 'graphql';
import UserType from './UserType';

import { createUser } from './UserLoader';

const createUserMutation = {
  type: UserType,
  resolve: createUser,
  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: 'UserInput',
        fields: {
          username: {
            type: GraphQLString,
          },
          email: {
            type: GraphQLString,
          },
          password: {
            type: GraphQLString,
          },
        },
      }),
    },
  },
};

export { createUserMutation };
