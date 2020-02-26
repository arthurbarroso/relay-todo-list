import passwordHash from '../../utils/passwordHash';

export async function createUser(value, args, context, info) {
  const { input } = args;
  // console.log('input', input)
  // console.log(context);
  const hashed_pass = await passwordHash(input.password);
  const user = await context.prisma.mutation.createUser(
    {
      data: {
        username: input.username,
        email: input.email,
        password: hashed_pass,
      },
    },
    info
  );

  return user;
}

export async function getUsers(value, args, context, info) {
  const { id } = args;
  if (id) {
    const user = await context.prisma.query.users(
      {
        where: {
          id,
        },
      },
      info
    );
    return user;
  }

  const users = await context.prisma.query.users({}, info);
  return users;
}

export async function getTodos(parentValues, args, context, info) {
  const todos = await context.prisma.query.todoes(
    {
      where: {
        author: {
          id: parentValues.id,
        },
      },
    },
    info
  );
  return todos;
}
