import { Controller, Get, Delete ,Param, Body, Post, Put } from '@nestjs/common';
import { EntriesService } from './entries.service';
import { Entry } from "./interfaces/entry.interface";

@Controller('entries')
export class EntriesController {
    constructor(private readonly entriesService: EntriesService) {}

    @Get()
    findAllRequest() {
        return this.entriesService.findAll();
    };

    @Get(':id')
    entryRequest(@Param('id') id): Promise<Entry> {
        return this.entriesService.findEntryByID(id);
    };

    @Delete(':id')
    deleteRequest(@Param('id') id): Promise<Entry> {
        return this.entriesService.deleteEntry(id);
    }

    @Post()
    newEntryRequest(@Body() newEntry): Promise<Entry> {
        return this.entriesService.addEntry(newEntry);
    }

    @Put(':id')
    editEntryRequest(@Body() updatedEntry, @Param('id') id): Promise<Entry|{errorMessage:String}> {
        return this.entriesService.editEntry(id, updatedEntry);
    }

}