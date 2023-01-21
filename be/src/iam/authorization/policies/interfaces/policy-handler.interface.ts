import { Policy } from 'src/iam/authorization/policies/interfaces/policy.interface';
import { ActiveUserData } from 'src/iam/interfaces/active-user-data.interface';

export interface PolicyHandler<T extends Policy> {
  handle(policy: T, user: ActiveUserData): Promise<void>;
}
