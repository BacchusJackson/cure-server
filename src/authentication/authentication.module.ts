import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthenticationService } from "./authentication.service";
import { JwtStrategy } from "./jwt.strategy";
import { UsersModule } from "src/users/users.module";

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            secretOrPrivateKey: 'secret-Key',
            signOptions: {
                expiresIn: 3600
            }
        })
    ],
    providers: [AuthenticationService, JwtStrategy],
    exports: [AuthenticationService]
})

export class AuthenticationModule {}