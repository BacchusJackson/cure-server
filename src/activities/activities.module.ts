import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivitySchema } from "../schemas/activity.schema";
import { ActivitiesController } from './activities.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: 'activities', schema: ActivitySchema}])],
  controllers: [ActivitiesController],
  providers: [ActivitiesService]
})
export class ActivitiesModule {}
