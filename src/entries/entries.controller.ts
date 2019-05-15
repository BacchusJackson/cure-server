import { Controller, Get, Delete ,Param, Body, Post, Put, UseGuards } from '@nestjs/common';
import { EntriesService } from './entries.service';
import { Entry } from "./interfaces/entry.interface";
import { AuthGuard } from "@nestjs/passport";

@Controller('entries')
export class EntriesController {
    constructor(private readonly entriesService: EntriesService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    findAllRequest() {
        return this.entriesService.findAll();
    };

    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    entryRequest(@Param('id') id): Promise<Entry> {
        return this.entriesService.findEntryByID(id);
    };

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    deleteRequest(@Param('id') id): Promise<Entry> {
        return this.entriesService.deleteEntry(id);
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    newEntryRequest(@Body() newEntry): Promise<Entry> {
        return this.entriesService.addEntry(newEntry);
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    editEntryRequest(@Body() updatedEntry, @Param('id') id): Promise<Entry|{errorMessage:String}> {
        return this.entriesService.editEntry(id, updatedEntry);
    }

}