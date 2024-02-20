import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AwardsService } from '../services/awards.service';
import { CreateAwardDto } from '../dto/create-award.dto';

@Controller('api/awards')
export class AwardsController {
  constructor(private readonly awardsService: AwardsService) {}

  @Get()
  getAllAwards() {
    return this.awardsService.getAllAwards();
  }

  @Post()
  createAward(@Body() createAwardDto: CreateAwardDto) {
    return this.awardsService.createAward(createAwardDto);
  }

  @Delete(':id')
  deleteAward(@Param('id') id: string) {
    return this.awardsService.deleteAward(id);
  }
}
