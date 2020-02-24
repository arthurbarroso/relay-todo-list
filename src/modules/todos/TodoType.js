import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

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
  },
});
