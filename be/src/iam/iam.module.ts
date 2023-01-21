import { ApiKey } from './../users/api-keys/entities/api-key.entity/api-key.entity';
import { FrameworkContributorPolicyHandler } from './authorization/policies/framework-contributor.policy';
import { RefreshTokenIdsStorage } from './authentication/refresh-token-ids.storage/refresh-token-ids.storage';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokenGuard } from 'src/iam/authentication/guards/access-token/access-token.guard';
import { AuthenticationGuard } from 'src/iam/authentication/guards/authentication/authentication.guard';
import jwtConfig from 'src/iam/config/jwt.config';
import { BcryptService } from 'src/iam/hashing/bcrypt.service';
import { HashingService } from 'src/iam/hashing/hashing.service';
import { User } from 'src/users/entities/user.entity';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';
import { PoliciesGuard } from 'src/iam/authorization/guards/policies/policies.guard';
import { PolicyHandlerStorage } from 'src/iam/authorization/policies/policy-handlers.storage';
import { ApiKeysService } from './authentication/api-keys.service';
import { ApiKeyGuard } from 'src/iam/authentication/guards/api-key/api-key.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, ApiKey]),
    JwtModule.registerAsync(jwtConfig.asProvider()),
    ConfigModule.forFeature(jwtConfig),
  ],
  providers: [
    {
      provide: HashingService,
      useClass: BcryptService,
    },
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
    },
    {
      provide: APP_GUARD,
      // useClass: RolesGuard,
      // useClass: PermissionsGuard,
      useClass: PoliciesGuard,
    },
    AccessTokenGuard,
    ApiKeyGuard,
    RefreshTokenIdsStorage,
    AuthenticationService,
    PolicyHandlerStorage,
    FrameworkContributorPolicyHandler,
    ApiKeysService,
  ],
  controllers: [AuthenticationController],
})
export class IamModule {}
