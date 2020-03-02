import {} from "./TodoMutations";
import { todoQuery } from "./TodoQueries";
import { todoSubscriptions } from "./todoSubscriptions";

export const queries = {
  todos: todoQuery
};

export const mutations = {};

export const subscriptions = {
  createdTodo: todoSubscriptions
};
