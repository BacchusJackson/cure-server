import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    findAll(): string {
        return this.usersService.findAll()
    }

    @Get(':id')
    findSpecific(@Param('id') id): string {
        return `Demo Return -> User ${id}`
    }
}