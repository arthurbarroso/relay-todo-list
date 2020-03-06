import { mongooseLoader, connectionFromMongoCursor } from "@entria/graphql-mongoose-loader"; //eslint-disable-line
import DataLoader from "dataloader";
import { ConnectionArguments } from "graphql-relay";
import Todo, { TodoModel } from "./TodoModel";
import User, { UserModel } from "../users/UserModel";
import GraphQLContext from "../context/GraphQLContext";

import getUserId from "../../utils/getUserId";

export default class TodoKind {
  id: string;

  _id: string;

  title: string;

  content: string;

  done: boolean;

  createdAt: Date;

  updatedAt: Date;

  author: string;

  constructor(data: TodoModel) {
    this.id = data.id || data._id;
    this._id = data._id;
    this.title = data.title;
    this.content = data.content;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.done = data.done;
    this.author = data.author;
  }
}

export const getLoader = () =>
  new DataLoader(ids => mongooseLoader(Todo, ids as any));

export const load = async (context, id): Promise<TodoModel> => {
  if (!id) {
    return null;
  }

  try {
    const data = Todo.findOne({ _id: id });

    if (!data) return null;

    return data;
  } catch (err) {
    return null;
  }
};

export const loadTodos = async (
  context: GraphQLContext,
  args: ConnectionArguments
) => {
  const userId = await getUserId(context.req);
  const where = args.search
    ? {
        title: {
          $regex: new RegExp(`^${args.search}`, "ig")
        },
        author: userId
      }
    : {
        author: userId
      };
  const todos = Todo.find(where, { _id: 1 }).sort({
    createdAt: -1
  });
  const t = await connectionFromMongoCursor({
    cursor: todos,
    context,
    args,
    loader: load
  });

  return t;
};

export async function findAuthor(
  parentValues: any,
  args: any,
  context: any,
  info: any
): Promise<UserModel> {
  const author = await User.findOne({ _id: parentValues.author });
  return author;
}
