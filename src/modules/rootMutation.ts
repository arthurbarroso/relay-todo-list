import { userMutations } from "./users";
import { sessionMutations } from "./sessions";

export default {
  ...userMutations,
  ...sessionMutations
};
