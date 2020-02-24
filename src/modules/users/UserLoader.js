import prisma from '../../prisma';

export async function createUser(_, { input }) {
  const user = await prisma.mutation.createUser({
    data: input,
  });
  return user;
}
