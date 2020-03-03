import { GraphQLNonNull, GraphQLString, GraphQLBoolean } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";

import Todo from "../TodoModel";
import { load } from "../TodoLoader";
import { TodoConnection } from "../../rootType";

interface todoArguments {
  title: string;
  content: string;
  done: boolean;
  _id: string;
}

const mutation = mutationWithClientMutationId({
  name: "updateTodo",
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
    _id: {
      type: GraphQLNonNull(GraphQLString)
    }
  },
  mutateAndGetPayload: async (args: todoArguments) => {
    const { title, content, done, _id } = args;

    const todo = await Todo.findOne({ _id });
    await todo.update({
      title,
      content,
      done
    });
    return {
      id: todo._id,
      error: null
    };
  },
  outputFields: {
    todoEdge: {
      type: TodoConnection.edgeType,
      resolve: async ({ id }, _, context) => {
        const updated = await load(context, id);

        if (!updated) return null;

        return {
          cursor: toGlobalId("Todo", updated._id),
          node: updated
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
