import { Controller, Get } from '@nestjs/common';

@Controller('activities')
export class ActivitiesController {
    @Get()
    findAll(): String {
        return 'Demo Return -> All Activities'
    }
}