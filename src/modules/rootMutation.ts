import { mutations } from './todos';
import { userMutations } from './users';
import { sessionMutations } from './sessions';

export default {
    ...mutations,
    ...userMutations,
    ...sessionMutations,
};
