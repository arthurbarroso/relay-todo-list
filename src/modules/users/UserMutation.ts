import { GraphQLString, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';
import { UserType } from '../rootType';

import { createUser } from './UserLoader';

const createUserMutation = {
    type: UserType,
    resolve: (parentValues, args, context, info) => {
        return createUser(parentValues, args, context, info);
    },
    args: {
        input: {
            type: new GraphQLInputObjectType({
                name: 'UserInput',
                fields: {
                    username: {
                        type: GraphQLNonNull(GraphQLString),
                    },
                    email: {
                        type: GraphQLNonNull(GraphQLString),
                    },
                    password: {
                        type: GraphQLNonNull(GraphQLString),
                    },
                },
            }),
        },
    },
};

export { createUserMutation };
