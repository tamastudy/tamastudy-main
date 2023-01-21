import { Auth } from './../iam/authentication/decorators/auth.decorator';
import { Roles } from './../iam/authorization/decorators/role.decorator';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { ActiveUser } from 'src/iam/decorators/active-user.decorator';
import { ActiveUserData } from 'src/iam/interfaces/active-user-data.interface';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Permissions } from 'src/iam/authorization/decorators/permission.decorator';
import { Permission } from 'src/iam/authorization/permission.type';
import { Role } from 'src/users/enums/role.enum';
import { Policies } from 'src/iam/authorization/decorators/policy.decorator';
import { FrameworkContributorPolicy } from 'src/iam/authorization/policies/framework-contributor.policy';
import { AuthType } from 'src/iam/authentication/enums/auth-type.enum';

@Auth(AuthType.Bearer, AuthType.ApiKey)
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  // @Roles(Role.Admin)
  // @Permissions(Permission.CreateCoffee)
  // @Policies(
  //   new FrameworkContributorPolicy(
  //     18,
  //   ) /** new MinAgePolicy(18), new OnlyAdminPolicy() */,
  // )
  @Get()
  findAll(@ActiveUser() activeUser: ActiveUserData): string {
    console.log(activeUser);
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(+id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(+id);
  }
}
