import { Injectable } from '@nestjs/common';
import { User } from "./interfaces/user.interface";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";

@Injectable()
export class UsersService {
constructor(@InjectModel('users') private readonly userModel: Model<User>){}
    findAll() {
        return 'Service Response'
    }
}
