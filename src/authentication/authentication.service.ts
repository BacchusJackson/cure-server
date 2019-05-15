import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
        ) {}
    
    async signIn(userCredentials: {username: String, password: string}) {
    
        const user = await this.usersService.findUserByUsername(userCredentials.username)

        if(!user.username) {
            return {errorMessage: 'Incorrect Login Information...'}
        }

        if(bcrypt.compareSync(userCredentials.password, user.password) == true) {
            let accessToken = this.jwtService.sign({userID: user.id});

            return {expiresIn: 3600, accessToken};

        }else{
            return {errorMessage: 'Incorrect Login Information...'}
        }
        
    }

    async vaidateUser(payload:{userID: String}): Promise<any> {
        return await this.usersService.findUserByID(payload.userID);
    }

    
}