import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Activity } from "./interfaces/activity.interface";
import { ActivityDto } from "./dto/activity.dto";

@Injectable()
export class ActivitiesService {
    constructor(@InjectModel('activities') private readonly activityModel: Model<Activity>) {}

    async findAll():Promise<Activity[]> {
        return await this.activityModel.find()
    }

    async deleteActivity(activityID): Promise<Activity> {
        return await this.activityModel.findOneAndDelete({_id: activityID})
    }

    async addActivity(activity): Promise<Activity> {
        const newActivity = new this.activityModel(activity);

        return await newActivity.save()
    }

    async editActivity(id: String, activity: ActivityDto): Promise<Activity|{errorMessage: String}> {
        // Try to update the activity using ID but catch any errors
        try {
            await this.activityModel.updateOne({_id: id}, activity);
        } catch (error) {
            console.log('UNHANDLED ERROR    ' + error.name);
            return {errorMessage: 'Something went wrong...'}
        };

        return await this.activityModel.findOne({_id: id})
    }
}