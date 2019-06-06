import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EntriesModule } from './entries/entries.module';
import { ActivitiesModule } from './activities/activities.module';
import { AuthenticationModule } from "./authentication/authentication.module";
import links from './links';

// To connect to the production database change './links' --> './links.prod'

@Module({
  imports: [
    UsersModule, EntriesModule, ActivitiesModule,
    MongooseModule.forRoot(links.cureDatabase),
    AuthenticationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}