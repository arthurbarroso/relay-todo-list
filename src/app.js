import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import prisma from './prisma';
import schema from './schema';

const server = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV === 'development',
  context: { prisma },
});

export default server;
