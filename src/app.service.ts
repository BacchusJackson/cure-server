import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  getHomepage(): string {
    return 'Hello World!';
  }

}
