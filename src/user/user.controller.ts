import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { SigninDto } from './signin.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUser(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  // @Get('user')
  // getUserUser(): string[] {
  //   return this.userService.getUserUser();
  // }

  // @Get('title')
  // getUserTitle(): string[] {
  //   return this.userService.getUserTitle();
  // }

  // Create / new
  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<User> {
    return await this.userService.createUser(body);
  }

  // Rest api -> id của dữ liệu để xoá
  // Delete
  @Delete(':id')
  async deleteUser(@Param() params: any): Promise<boolean> {
    console.log('params: ', params);
    const id: string = params.id;
    // riêng nút xoá -> http request -> localhost:3000/user/${id}
    return await this.userService.deleteUser(id);
  }

  @Patch(':id')
  async updateUser(
    @Param() params: any,
    @Body() updateData: UpdateUserDto,
  ): Promise<User> {
    console.log('params: ', params);
    const id: string = params.id;
    // riêng nút xoá -> http request -> localhost:3000/user/${id}
    return await this.userService.updateUser(id, updateData);
  }

  @Post('signin')
  async signin(@Body() body: SigninDto): Promise<User> {
    return await this.userService.signin(body);
  }
}
