import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthenticationService } from "./authentication.service";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthenticationService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secret-Key'
        });
    };

    async validate(payload) {

        const user = this.authService.vaidateUser(payload);

        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}