import { GraphQLNonNull, GraphQLString, GraphQLBoolean } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";

import Todo from "../TodoModel";
import { load } from "../TodoLoader";
import { TodoConnection } from "../../rootType";

import getUserId from "../../../utils/getUserId";

interface todoArguments {
  title: string;
  content: string;
  done: boolean;
  author: string;
}

const mutation = mutationWithClientMutationId({
  name: "createTodo",
  inputFields: {
    title: {
      type: GraphQLNonNull(GraphQLString)
    },
    content: {
      type: GraphQLNonNull(GraphQLString)
    },
    done: {
      type: GraphQLNonNull(GraphQLBoolean)
    }
  },
  mutateAndGetPayload: async (args: todoArguments, context) => {
    const { title, content, done } = args;
    const user = await getUserId(context.req);
    const newTodo = await Todo.create({
      title,
      content,
      done,
      author: user
    });

    return {
      id: newTodo._id,
      error: null
    };
  },
  outputFields: {
    todoEdge: {
      type: TodoConnection.edgeType,
      resolve: async ({ id }, _, context) => {
        const newTodo = await load(context, id);

        if (!newTodo) return null;

        return {
          cursor: toGlobalId("Todo", newTodo._id),
          node: newTodo
        };
      }
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error
    }
  }
});

export default {
  ...mutation
};
