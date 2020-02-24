import {
  createTodoMutation,
  updateTodoMutation,
  deleteTodoMutation,
} from './TodoMutations';
import { todoQuery } from './TodoQueries';

export const queries = {
  todos: todoQuery,
};

export const mutations = {
  createTodo: createTodoMutation,
  updateTodo: updateTodoMutation,
  deleteTodo: deleteTodoMutation,
};
