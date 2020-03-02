import { GraphQLNonNull, GraphQLString, GraphQLBoolean } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";

import Todo from "../TodoModel";
import { load } from "../TodoLoader";
import { TodoConnection } from "../../rootType";

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
    },
    author: {
      type: GraphQLNonNull(GraphQLString)
    }
  },
  mutateAndGetPayload: async (args: todoArguments) => {
    const { title, content, done, author } = args;
    const newTodo = await Todo.create({
      title,
      content,
      done,
      author
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
