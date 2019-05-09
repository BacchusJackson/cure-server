import { Module } from '@nestjs/common';
import { EntriesController } from './entries.controller';
import { EntriesService } from './entries.service';
import { MongooseModule } from "@nestjs/mongoose";
import { EntrySchema } from "src/schemas/entry.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: 'entries', schema: EntrySchema}])],
    controllers: [EntriesController],
    providers: [EntriesService]
})

export class EntriesModule {}
