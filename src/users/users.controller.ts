import { Controller, Get, Delete ,Param, Body, Post, Put } from '@nestjs/common';
import { UsersService } from "./users.service";
import { User } from "./interfaces/user.interface";

// The functions that handle HTTP Requests

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll()
    }
    @Get('/username/:username')
    findUserByUsername(@Param('username') username): Promise<User> {
        return this.usersService.findUserByUsername(username);
    }

    @Get('/id/:id')
    findUserByID(@Param('id') id): Promise<User> {
        return this.usersService.findUserByID(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id): Promise<User> {
        return this.usersService.deleteUser(id);
    }

    @Post()
    addUser(@Body() newUser): Promise<User> {
        return this.usersService.addUser(newUser);
    }

    @Put(':id')
    editUser(@Param('id') id, @Body() user) {
        return this.usersService.editUser(id, user);
    }

}