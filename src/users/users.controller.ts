import { Controller, Get, Delete ,Param, Body, Post, Put } from '@nestjs/common';
import { UsersService } from "./users.service";
import { User } from "./interfaces/user.interface";

// The functions that handle HTTP Requests

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAllRequest(): Promise<User[]> {
        return this.usersService.findAll()
    }
    @Get('/username/:username')
    findUserByUsernameRequest(@Param('username') username): Promise<User> {
        return this.usersService.findUserByUsername(username);
    }

    @Get('/id/:id')
    findUserByIDRequest(@Param('id') id): Promise<User> {
        return this.usersService.findUserByID(id);
    }

    @Delete(':id')
    deleteUserRequest(@Param('id') id): Promise<User> {
        return this.usersService.deleteUser(id);
    }

    @Post()
    addUserRequest(@Body() newUser): Promise<User> {
        return this.usersService.addUser(newUser);
    }

    @Put(':id')
    editUserRequest(@Param('id') id, @Body() user) {
        return this.usersService.editUser(id, user);
    }

}