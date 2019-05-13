import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(private readonly jwtService: JwtService) {}

  getHomepage(): string {
    return 'Hello World!';
  }

  async signIn() {
    const payLoad = {stuff: 'success'};
    const accessToken = this.jwtService.sign(payLoad);
    console.log(this.jwtService.decode(accessToken));
    return {expiresIn: 3600, accessToken};
}
}
