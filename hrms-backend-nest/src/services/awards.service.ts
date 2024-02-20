import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Award, AwardDocument } from '../schemas/award.schema';
import { CreateAwardDto } from '../dto/create-award.dto';

@Injectable()
export class AwardsService {
  constructor(
    @InjectModel(Award.name) private awardModel: Model<AwardDocument>,
  ) {}

  async getAllAwards(): Promise<Award[]> {
    return this.awardModel.find().exec();
  }

  async createAward(createAwardDto: CreateAwardDto): Promise<Award> {
    const createdAward = new this.awardModel(createAwardDto);
    return createdAward.save();
  }

  async deleteAward(id: string): Promise<any> {
    return this.awardModel.findByIdAndDelete(id).exec();
  }
}
