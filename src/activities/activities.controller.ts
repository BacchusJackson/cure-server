import { Controller, Get, Delete ,Param, Body, Post, Put, UseGuards } from '@nestjs/common';
import { ActivitiesService } from "./activities.service";
import { Activity } from "./interfaces/activity.interface";
import { AuthGuard } from "@nestjs/passport";

@Controller('activities')
export class ActivitiesController {
    constructor(private readonly activitiesService: ActivitiesService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    findAllRequest(): Promise<Activity[]> {
        return this.activitiesService.findAll()
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    deleteRequest(@Param('id') id): Promise<Activity> {
        return this.activitiesService.deleteActivity(id)
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    addActivityRequest(@Body() newActivity): Promise<Activity> {
        return this.activitiesService.addActivity(newActivity)
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    editActivityRequest(@Body() newActivity, @Param('id') id): Promise<Activity| {errorMessage: String}> {
        return this.activitiesService.editActivity(id, newActivity)
    }
}