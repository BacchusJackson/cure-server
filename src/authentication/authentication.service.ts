import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthenticationService {
    constructor(private readonly jwtService: JwtService) {}
    
    async signIn() {
        const payload = {message: "Success"}
        const accessToken = this.jwtService.sign(payload);
        return {expiresIn: '3600', accessToken}
    }
    
    async vaidateUser(payload): Promise<any> {
        return await 'test'
    }
}