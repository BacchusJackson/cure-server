import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: 'users', schema: UserSchema}])],
    controllers: [UsersController],
    providers: [UsersService]
})

export class UsersModule {}