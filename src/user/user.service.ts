import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';

@Injectable()
export class UserService {
  users: User[] = [];

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // getUserUser(): string[] {
  //   const userUsers: string[] = this.users.map((user: User) => {
  //     return user.user;
  //   });

  //   return userUsers;
  // }

  // getUserTitle(): string[] {
  //   const userTitles: string[] = this.users.map((user: User) => {
  //     return user.title;
  //   });

  //   return userTitles;
  // }

  async createUser(body: CreateUserDto): Promise<User> {
    // em sẽ tạo id tăng dần theo số lượng bài user đang có. Ví dụ bài đầu tiên là id 1 ->  id 2
    const id: string = new Date().getTime().toString();

    const newUser: User = {
      name: body.name,
      password: body.password,
      age: body.age,
      id: id,
    };

    await this.userRepository.save(newUser);

    return newUser;
  }

  async deleteUser(id: string): Promise<boolean> {
    const deleteUsers = await this.userRepository.find({
      where: {
        id: id,
      },
    });

    if (deleteUsers.length > 0) {
      await this.userRepository.remove(deleteUsers);
      return true;
    } else {
      return false;
    }
  }

  async updateUser(id: string, updateData: UpdateUserDto): Promise<User> {
    const oldData = await this.userRepository.findOne({
      where: {
        id: id,
      },
    });

    // rest operator -> ...
    const newData: User = { ...oldData, ...updateData };

    return await this.userRepository.save(newData);
  }
}
