import { Injectable } from '@nestjs/common';

export type User = { name: string; age: number; children?: string[] };

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPostUserData(): User[] {
    const khoi: User = {
      name: 'Khôi',
      age: 18,
    };

    return [khoi];
  }
}
