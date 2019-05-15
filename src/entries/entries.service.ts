import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Entry } from "./interfaces/entry.interface";
import { EntryDto } from "./dto/entry.dto";

@Injectable()
export class EntriesService {
constructor(@InjectModel('entries') private readonly entryModel: Model<Entry>){}

    async findAll(): Promise<Entry[]> {
        return await this.entryModel.find()
    };

    async findEntryByID(id: string): Promise<Entry> {
        return await this.entryModel.findByID(id)
    };

    async deleteEntry(id: string): Promise<Entry> {
        return await this.entryModel.find({_id:id})
    };

    async addEntry(entry: EntryDto): Promise<Entry> {
        const newEntry = new this.entryModel(entry);

        return await newEntry.save()
    };

    async editEntry(id, entry: EntryDto): Promise<Entry|{errorMessage:String}> {

        try {
            await this.entryModel.updateOne({_id: id}, entry);
        } catch (error) {
            console.log('UNHANDLED ERROR    ' + error.name);
            return {errorMessage: 'Something went wrong...'}
        };

        return await this.entryModel.findOne({_id:id})

    }
}