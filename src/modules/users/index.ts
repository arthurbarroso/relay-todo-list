import { createUserMutation } from './UserMutation';
import { userQuery } from './UserQueries';

export const userQueries = {
  users: userQuery,
};

export const userMutations = {
  register: createUserMutation,
};
