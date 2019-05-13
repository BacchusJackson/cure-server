import { Controller, Get, Delete ,Param, Body, Post, Put } from '@nestjs/common';
import { ActivitiesService } from "./activities.service";
import { Activity } from "./interfaces/activity.interface";

@Controller('activities')
export class ActivitiesController {
    constructor(private readonly activitiesService: ActivitiesService) {}

    @Get()
    findAllRequest(): Promise<Activity[]> {
        return this.activitiesService.findAll()
    }

    @Delete(':id')
    deleteRequest(@Param('id') id): Promise<Activity> {
        return this.activitiesService.deleteActivity(id)
    }

    @Post()
    addActivityRequest(@Body() newActivity): Promise<Activity> {
        return this.activitiesService.addActivity(newActivity)
    }

    @Put(':id')
    editActivityRequest(@Body() newActivity, @Param('id') id): Promise<Activity| {errorMessage: String}> {
        return this.activitiesService.editActivity(id, newActivity)
    }
}