import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

export async function login(parentValues, args, context, info) {
  const userExists = await context.prisma.query.user({
    where: {
      username: args.input.username,
    },
    info,
  });

  if (!userExists) throw new Error('No user found with that username');

  const match = await compare(args.input.password, userExists.password);

  if (!match) throw new Error('Invalid password');
  const jwtToken = await jwt.sign({ id: userExists.id }, authConfig.secret, {
    expiresIn: authConfig.expiresIn,
  });

  return {
    token: jwtToken,
  };
}
