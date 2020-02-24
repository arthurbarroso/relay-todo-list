import { mutations } from './todos';
import { userMutations } from './users';

export default {
  ...mutations,
  ...userMutations,
};
