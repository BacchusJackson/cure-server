import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { User } from "./interfaces/user.interface";
import { UserDto } from "./dto/user.dto";
import * as bcrypt from 'bcryptjs';

// The functions that interact with mongoDB, CRUD for users

@Injectable()
export class UsersService {
constructor(
    @InjectModel('users') private readonly userModel: Model<User>
){}
    async findAll(): Promise<User[]> {
        return await this.userModel.find()
    };
    
    async findUserByID(userID: String): Promise<User> {
        return await this.userModel.findById(userID)
    };

    async findUserByUsername(username: String): Promise<User>{
        return await this.userModel.findOne({username: username})
    }

    async deleteUser(userID: String): Promise<User> {
        return await this.userModel.findOneAndDelete({_id: userID})
    };

    async addUser(reqUser: UserDto): Promise<User> {
        const newUser = new this.userModel(reqUser);
        
        // Salt and hash the submitted password
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(newUser.password, salt)

        // Add the rest of the user properties and defaults
        newUser.password = hash
        newUser.displayName = `${newUser.firstName} ${newUser.lastName}`
        newUser.site = reqUser.site || 'defaut'
        newUser.clinic = reqUser.clinic || 'default'
        newUser.status = reqUser.status || 'temp'
        return await newUser.save()
    };

    async editUser(id: String, reqUser: UserDto): Promise<User|{errorMessage:String}> {
            
            // Hash password if they want to change it
            if(reqUser.password) {
                let salt = bcrypt.genSaltSync(10);
                let hash = bcrypt.hashSync(reqUser.password, salt);
                reqUser.password = hash;
            };

        // Try to update the user and catch any errors
        try {
            await this.userModel.updateOne({_id: id}, reqUser)
        } catch (error) {
            if(error.name === 'CastError') {
                // A cast error means they passed an ID in the incorrect format
                return {errorMessage:'Improper ID passed'}
            } else {
                // Any other strange errors that might pop up
                console.log('UHANDLED ERROR ' + error.name);
                return {errorMessage: 'Something went terrible wrong...'}
            };
        };

        // Find the updated user
        return await this.userModel.findOne({_id:id})
    };

};