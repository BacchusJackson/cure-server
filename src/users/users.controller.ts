import { Controller, Get, Delete ,Param, Body, Post, Put, UseGuards} from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";
import { UsersService } from "./users.service";
import { User } from "./interfaces/user.interface";

// The functions that handle HTTP Requests

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    findAllRequest(): Promise<User[]> {
        
        return this.usersService.findAll()
    }
    @Get('/username/:username')
    @UseGuards(AuthGuard('jwt'))
    findUserByUsernameRequest(@Param('username') username): Promise<User> {
        return this.usersService.findUserByUsername(username);
    }

    @Get('/id/:id')
    @UseGuards(AuthGuard('jwt'))
    findUserByIDRequest(@Param('id') id): Promise<User> {
        return this.usersService.findUserByID(id);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    deleteUserRequest(@Param('id') id): Promise<User> {
        return this.usersService.deleteUser(id);
    }

    @Post()
    addUserRequest(@Body() newUser): Promise<User> {
        return this.usersService.addUser(newUser);
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    editUserRequest(@Param('id') id, @Body() user) {
        return this.usersService.editUser(id, user);
    }

}