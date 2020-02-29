import User, { UserModel } from './UserModel';
import Todo, { TodoModel } from '../todos/TodoModel';
import passwordHash from '../../utils/passwordHash';

export async function createUser(parentValues: any, args: any, context, info): Promise<UserModel> {
  const { input } = args;
  const hashed_pass = await passwordHash(input.password);
  const user = await User.create({
    username: input.username,
    password: hashed_pass,
    email: input.email
  })
  return user;
}


export const getUsers = async (parentValues: any, args: any, context: any, info: any): Promise<UserModel> => {
  const users = await User.find();
  return users;
}

export async function getTodos(parentValues: any, args: any, context: any, info: any): Promise<TodoModel> {

  const todos = await Todo.find({ author: parentValues.id })
  return todos;
}
