import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() user) {
    return this.usersService.createUser(user);
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.usersService.getUser(id);
  }

  @Patch(':id')
  updateUser(@Param(':id') id: number, @Body() updates) {
    return this.usersService.updateUser(id, updates);
  }

  @Delete('id')
  deleteUser(@Param(':id') id: number) {
    return this.usersService.deleteUser(id);
  }
}
