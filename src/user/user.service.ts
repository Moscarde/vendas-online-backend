import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/createUser.dto';
import { hash } from 'bcrypt';
import { randomUser } from 'random-user-data';

@Injectable()
export class UserService {
  private userList: User[] = [];
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // Password encrypt

    const newUser = randomUser('f', 19, 40);

    const saltOrRounds = 10;
    const passwordHashed = await hash(createUserDto.password, saltOrRounds);

    // creating user obj
    const user: User = {
      ...newUser,
      cpf: '21301312',
      id: this.userList.length + 1,
      password: passwordHashed,
    };

    // pushing into userList[]
    this.userList.push(user);

    return user;
  }

  async getAllUser(): Promise<User[]> {
    return this.userList;
  }
}
