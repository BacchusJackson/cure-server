import * as mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

export const ActivitySchema = new mongoose.Schema({
    name: String,
    category: String,
    properties: [],
})