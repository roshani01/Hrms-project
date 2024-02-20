// employee-awards.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeAwardsController } from '../controllers/employee-awards.controller';
import { EmployeeAwardsService } from '../services/employee-awards.service';
import { EmployeeAwards, EmployeeAwardsSchema } from '../schemas/employee-awards.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EmployeeAwards.name, schema: EmployeeAwardsSchema },
    ]),
  ],
  controllers: [EmployeeAwardsController],
  providers: [EmployeeAwardsService],
})
export class EmployeeAwardsModule {}
