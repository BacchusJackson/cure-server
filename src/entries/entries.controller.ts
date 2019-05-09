import { Controller, Get } from '@nestjs/common';

@Controller('entries')
export class EntriesController {
    @Get()
    findAll(): String {
        return 'Demo Return -> All Entries'
    }
}