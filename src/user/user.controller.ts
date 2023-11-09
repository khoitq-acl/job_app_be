import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto, User, UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): any[] {
    return this.userService.getUsers();
  }

  @Get('user')
  getUserUser(): string[] {
    return this.userService.getUserUser();
  }

  @Get('title')
  getUserTitle(): string[] {
    return this.userService.getUserTitle();
  }

  // Create / new
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.userService.createUser(body);
  }

  // Rest api -> id của dữ liệu để xoá
  // Delete
  @Delete(':id')
  deleteUser(@Param() params: any): boolean {
    console.log('params: ', params);
    const id: number = +params.id;
    // riêng nút xoá -> http request -> localhost:3000/user/${id}
    return this.userService.deleteUser(id);
  }
}
