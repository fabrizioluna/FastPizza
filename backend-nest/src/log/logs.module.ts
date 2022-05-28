import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsController } from './logs.controller';
import { LogsService } from './logs.service';
import { Logs, LogsSchema } from './schema/logs.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Logs.name, schema: LogsSchema }]),
  ],
  controllers: [LogsController],
  providers: [LogsService],
})
export class LogsModule {}
