import prisma from '../../prisma';

export async function createTodo(_, { input }) {
  const todo = await prisma.mutation.createTodo({
    data: input,
  });
  return todo;
}

export async function getTodos(value, id, contain) {
  if (id && !contain) {
    const todo = await prisma.query.todoes({
      where: {
        id,
      },
    });
    return todo;
  }
  if (contain && !id) {
    const containTodo = await prisma.query.todoes({
      where: {
        OR: [
          {
            title_contains: contain,
          },
          {
            content_contains: contain,
          },
        ],
      },
    });
    return containTodo;
  }
  const todos = await prisma.query.todoes();
  return todos;
}

export async function updateTodo(_, id, input) {
  const todo = await prisma.mutation.updateTodo({
    where: {
      id,
    },
    data: input,
  });
  return todo;
}
