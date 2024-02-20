import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AwardsController } from '../controllers/awards.controller';
import { AwardsService } from '../services/awards.service';
import { Award, AwardSchema } from '../schemas/award.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Award.name, schema: AwardSchema }])],
  controllers: [AwardsController],
  providers: [AwardsService],
})
export class AwardsModule {}
