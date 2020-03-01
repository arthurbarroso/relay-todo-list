import Todo, { TodoModel } from "./TodoModel";
import User, { UserModel } from "../users/UserModel";
import getUserId from "../../utils/getUserId";

export async function createTodo(
  parentValues: any,
  args: any,
  context: any,
  info: any
): Promise<TodoModel> {
  const { input } = args;
  const todo = await Todo.create({
    title: input.title,
    content: input.content,
    done: input.done,
    author: input.author
  });
  context.pubsub.publish("TODO_ADDED", { createdTodo: todo });
  return todo;
}

export async function getTodos(
  parentValues: any,
  args: any,
  context: any,
  info: any
): Promise<TodoModel> {
  const todos = await Todo.find();
  return todos;
}

export async function updateTodo(
  parentValues: any,
  args: any,
  context: any,
  info: any
): Promise<TodoModel> {
  const { id, input } = args;
  const todo = await Todo.findOne({ _id: id });
  if (!todo) {
    throw new Error("No todo found with that id");
  }
  await todo.update(input);
  return todo;
}

export async function deleteTodo(
  parentValues: any,
  args: any,
  context: any,
  info: any
): Promise<TodoModel> {
  const { id } = args;
  const todo = await Todo.findOne({ _id: id });
  if (!todo) {
    throw new Error("No todo found with that id");
  }
  await todo.destroy();
  return todo;
}

export async function findAuthor(
  parentValues: any,
  args: any,
  context: any,
  info: any
): Promise<TodoModel> {
  const author = await User.findOne({ _id: parentValues.author });
  return author;
}
