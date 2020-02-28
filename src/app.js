import 'dotenv/config';
import { ApolloServer, PubSub } from 'apollo-server';
import prisma from './prisma';
import schema from './schema';

const pubsub = new PubSub();

const server = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV === 'development',
  context: req => ({
    prisma,
    req,
    pubsub,
  }),
});

export default server;
