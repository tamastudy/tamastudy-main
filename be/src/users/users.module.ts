import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { ApiKey } from 'src/users/api-keys/entities/api-key.entity/api-key.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, ApiKey])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
