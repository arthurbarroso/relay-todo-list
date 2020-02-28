import getUserId from "../../utils/getUserId";
export async function createTodo(parentValues, args, context, info) {
  const { input } = args;
  const todo = await context.prisma.mutation.createTodo(
    {
      data: {
        title: input.title,
        content: input.content,
        done: input.done,
        author: {
          connect: {
            id: input.author,
          },
        },
      },
    },
    info
  );
  /*
    const t = await getUserId(context.req)
    console.log(t)
  */
  context.pubsub.publish('TODO_ADDED', { createdTodo: todo });
  return todo;
}

export async function getTodos(parentValues, args, context, info) {
  const { id, contain } = args;
  if (id && !contain) {
    const todo = await context.prisma.query.todoes(
      {
        where: {
          id,
        },
      },
      info
    );
    return todo;
  }
  if (contain && !id) {
    const containTodo = await context.prisma.query.todoes(
      {
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
      },
      info
    );
    return containTodo;
  }
  const todos = await context.prisma.query.todoes({}, info);
  return todos;
}

export async function updateTodo(parentValues, args, context, info) {
  const { id, input } = args;
  const todo = await context.prisma.mutation.updateTodo(
    {
      where: {
        id,
      },
      data: input,
    },
    info
  );
  return todo;
}

export async function deleteTodo(_, args, context, info) {
  const { id } = args;
  const { prisma } = context;
  const todo = await prisma.mutation.deleteTodo(
    {
      where: {
        id,
      },
    },
    info
  );

  return todo;
}

export async function findAuthor(parentValues, args, context, info) {
  // console.log(parentValues.author.username);
  const user = await context.prisma.query.users(
    {
      where: {
        username: parentValues.author.username,
      },
    },
    info
  );
  return user[0];
}