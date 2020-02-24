import 'dotenv/config';
import { ApolloServer } from 'apollo-server';

import schema from './schema';

const server = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV === 'development',
});

export default server;
