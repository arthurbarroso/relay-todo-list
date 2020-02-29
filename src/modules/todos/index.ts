import { createTodoMutation, updateTodoMutation, deleteTodoMutation } from './TodoMutations';
import { todoQuery } from './TodoQueries';
import { todoSubscriptions } from './todoSubscriptions';

export const queries = {
    todos: todoQuery,
};

export const mutations = {
    createTodo: createTodoMutation,
    updateTodo: updateTodoMutation,
    deleteTodo: deleteTodoMutation,
};

export const subscriptions = {
    createdTodo: todoSubscriptions,
};
