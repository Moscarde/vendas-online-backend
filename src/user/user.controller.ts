import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  //Get route
  @Get()
  async getAllUsers() {
    return JSON.stringify({ message: 'Lista de usuários' });
  }

  //Post route
  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    // console.log(createUser);
    return {
      ...createUser,
      password: undefined,
    };
  }
}
