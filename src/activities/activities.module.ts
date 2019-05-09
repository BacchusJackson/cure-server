import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';

@Module({
  providers: [ActivitiesService]
})
export class ActivitiesModule {}
