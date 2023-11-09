import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  title: string;
  content: string;
  user: string;
}

// DTO -> data transfer object
export interface CreateUserDto {
  title: string;
  content: string;
  user: string;
}

@Injectable()
export class UserService {
  users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  getUserUser(): string[] {
    const userUsers: string[] = this.users.map((user: User) => {
      return user.user;
    });

    return userUsers;
  }

  getUserTitle(): string[] {
    const userTitles: string[] = this.users.map((user: User) => {
      return user.title;
    });

    return userTitles;
  }

  createUser(body: CreateUserDto): User {
    // em sẽ tạo id tăng dần theo số lượng bài user đang có. Ví dụ bài đầu tiên là id 1 ->  id 2
    const id: number = new Date().getTime();

    const newUser: User = {
      title: body.title,
      content: body.content,
      user: body.user,
      id: id,
    };

    this.users.push(newUser);

    return newUser;
  }

  deleteUser(id: number): boolean {
    const newUsers: User[] = this.users.filter((user: User) => {
      return user.id !== id;
    });

    const deleteSuccess: boolean = newUsers.length < this.users.length;

    this.users = newUsers;

    return deleteSuccess;
  }
}
