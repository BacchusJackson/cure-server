import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticationService } from "./authentication/authentication.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthenticationService
    ) {}

  @Post('signIn')
  signInRequest(@Body() userCredentials) {
    return this.authService.signIn(userCredentials)
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  homepageRequest(): string {
    return this.appService.getHomepage();
  }
}