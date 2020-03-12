import { mongooseLoader, connectionFromMongoCursor } from "@entria/graphql-mongoose-loader"; //eslint-disable-line
import DataLoader from "dataloader";
import { ConnectionArguments } from "graphql-relay";
import User, { UserModel } from "./UserModel";
import Todo, { TodoModel } from "../todos/TodoModel";
import passwordHash from "../../utils/passwordHash";
import GraphQLContext from "../context/GraphQLContext";

export default class Userind {
  id: string;

  _id: string;

  username: string;

  email: string;

  password: string;

  createdAt: Date;

  updatedAt: Date;

  constructor(data: UserModel) {
    this.id = data.id || data._id;
    this._id = data._id;
    this.username = data.username;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.password = data.password;
  }
}

export const getLoader = () =>
  new DataLoader(ids => mongooseLoader(Todo, ids as any));

export const load = async (context, id): Promise<UserModel> => {
  if (!id) {
    return null;
  }

  try {
    const data = User.findOne({ _id: id });

    if (!data) return null;

    return data;
  } catch (err) {
    return null;
  }
};

export const loadUsers = async (
  context: GraphQLContext,
  args: ConnectionArguments
) => {
  const where = args.search
    ? {
      username: {
        $regex: new RegExp(`^${args.search}`, "ig")
      }
    }
    : {};
  const users = User.find(where, { _id: 1 }).sort({
    createdAt: -1
  });
  const t = await connectionFromMongoCursor({
    cursor: users,
    context,
    args,
    loader: load
  });

  return t;
};

export async function getTodos(
  parentValues: any,
  args: any,
  context: any,
  info: any
): Promise<TodoModel> {
  const todos = await Todo.find({ author: parentValues._id });
  if (!todos) {
    return null;
  }
  return todos;
}
