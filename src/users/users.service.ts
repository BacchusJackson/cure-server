import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";

import { User } from "./interfaces/user.interface";
import { deleteResponse } from "./interfaces/responses.interface";
import { UserDto } from "./dto/user.dto";
import * as bcrypt from 'bcryptjs';

// The functions that interact with mongoDB

@Injectable()
export class UsersService {
constructor(@InjectModel('users') private readonly userModel: Model<User>){}
    async findAll(): Promise<User[]> {
        return await this.userModel.find()
    }
    
    async findUserByID(userID): Promise<User> {
        return await this.userModel.find({_id: userID})
    }

    async findUserByUsername(username): Promise<User>{
        return await this.userModel.find({username: username})
    }

    async deleteUser(userID): Promise<User> {
        return await this.userModel.findOneAndDelete({_id: userID})
    }

    async addUser(reqUser: UserDto): Promise<User> {
        const newUser = new this.userModel(reqUser);
        
        // Salt and hash the submitted password
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(newUser.password, salt)

        // Add the rest of the user properties and defaults
        newUser.password = hash
        newUser.displayName = `${newUser.firstName} ${newUser.lastName}`
        newUser.site = 'defaut'
        newUser.clinic = 'default'
        newUser.status = 'temp'
        return await newUser.save()
    }
    editUserTest(id, reqUser: UserDto) {
        console.log(id);
        return reqUser
    };

    async editUser(id, reqUser: UserDto): Promise<User> {

        if(reqUser.password) {
            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(reqUser.password, salt);
            reqUser.password = hash;
        }
        
        return await this.userModel.findOneAndUpdate({_id: id}, {$set: reqUser})
    }

}