import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAdmin(): string {
    return 'Protected Admin';
  }

  getUser(): string {
    return 'Public User';
  }
}
