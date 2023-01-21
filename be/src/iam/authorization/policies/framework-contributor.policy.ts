import { Injectable } from '@nestjs/common';
import { PolicyHandler } from 'src/iam/authorization/policies/interfaces/policy-handler.interface';
import { Policy } from 'src/iam/authorization/policies/interfaces/policy.interface';
import { PolicyHandlerStorage } from 'src/iam/authorization/policies/policy-handlers.storage';
import { ActiveUserData } from 'src/iam/interfaces/active-user-data.interface';

export class FrameworkContributorPolicy implements Policy {
  name = 'FrameworkContributor';
}

@Injectable()
export class FrameworkContributorPolicyHandler
  implements PolicyHandler<FrameworkContributorPolicy>
{
  constructor(private readonly policyHandlerStorage: PolicyHandlerStorage) {
    this.policyHandlerStorage.add(FrameworkContributorPolicy, this);
  }

  async handle(
    policy: FrameworkContributorPolicy,
    user: ActiveUserData,
  ): Promise<void> {
    const isContributor = user.email.endsWith('@trilon.io');
    if (!isContributor) {
      throw new Error('User is not a contributor');
    }
  }
}
