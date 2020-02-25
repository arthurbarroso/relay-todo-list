// import prisma from '../../prisma';

export async function createUser(value, args, context, info) {
  const { input } = args;
  // console.log('input', input)
  // console.log(context);
  const user = await context.prisma.mutation.createUser(
    {
      data: input,
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

export async function getTodos(value, args, context, info) {
  // console.log(value);
}
