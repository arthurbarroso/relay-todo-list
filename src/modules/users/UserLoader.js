import prisma from '../../prisma';

export async function createUser(_, { input }) {
  const user = await prisma.mutation.createUser({
    data: input,
  });
  return user;
}

export async function getUser(value, id, contain, info) {
  // console.log(info);
  const user = await prisma.query.users(
    {
      where: {
        id,
      },
    },
    info
  );
  return user;
}
