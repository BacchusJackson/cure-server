import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { AuthenticationService } from "./authentication/authentication.service";
import * as path from 'path'

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthenticationService
    ) {}

  @Post('signIn')
  signInRequest(@Body() userCredentials) {
    return this.authService.signIn(userCredentials)
  }

  @Get('/')
  root(@Res() response): void {
    // Send a simple html file
    response.sendFile(path.resolve('./src/hello.html'));
  
  }

}