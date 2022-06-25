import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsService } from 'src/log/logs.service';
import { Logs, LogsSchema } from 'src/log/schema/logs.schema';
import { RolesController } from './roles.controller';
import { RolesServices } from './roles.service';
import { Rol, RolesSchema } from './schema/roles.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rol.name, schema: RolesSchema }]),
    MongooseModule.forFeature([{ name: Logs.name, schema: LogsSchema }]),
  ],
  controllers: [RolesController],
  providers: [RolesServices, LogsService],
})
export class RolesModule {}
