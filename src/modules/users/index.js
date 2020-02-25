import { createUserMutation } from './UserMutations';
import { userQuery } from './UserQueries';

export const userQueries = {
  users: userQuery,
};

export const userMutations = {
  createUser: createUserMutation,
};
