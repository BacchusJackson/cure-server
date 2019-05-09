import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Entry } from "./interfaces/entry.interface";

@Injectable()
export class EntriesService {
constructor(@InjectModel('entries') private readonly userModel: Model<Entry>){}
    findAll() {
        return 'Service Response'
    }
}