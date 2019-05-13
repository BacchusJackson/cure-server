import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHomepage(): string {
    return 'Hello World!';
  }
}
