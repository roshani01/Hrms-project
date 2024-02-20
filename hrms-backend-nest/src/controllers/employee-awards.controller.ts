// employee-awards.controller.ts

import { Controller, Get, Post, Body, Param, Delete,Put } from '@nestjs/common';
import { EmployeeAwardsService } from '../services/employee-awards.service'; // Make sure to create the service file

@Controller('api/employee-awards')
export class EmployeeAwardsController {
  constructor(private readonly employeeAwardsService: EmployeeAwardsService) {}

  
  @Get('all-employees-with-awards')
  getAllEmployeesWithAwards() {
    return this.employeeAwardsService.getAllEmployeesWithAwards();
  }

  @Get(':employeeId')
  getAwardsByEmployeeId(@Param('employeeId') employeeId: string) {
    return this.employeeAwardsService.getAwardsByEmployeeId(employeeId);
  }

  @Post(':employeeId')
  addAwardToEmployee(
    @Param('employeeId') employeeId: string,
    @Body() awardData: any,
  ) {
    return this.employeeAwardsService.addAwardToEmployee(employeeId, awardData);
  }

  @Put('update-awards/:employeeId')
  updateEmployeeAwards(
    @Param('employeeId') employeeId: string,
    @Body() newAwards: any[],
  ) {
    this.employeeAwardsService.updateEmployeeAwards(employeeId, newAwards);
    return { message: 'Employee awards updated successfully' };
  }

  @Delete(':employeeId/:awardId')
  removeAwardFromEmployee(
    @Param('employeeId') employeeId: string,
    @Param('awardId') awardId: string,
  ) {
    return this.employeeAwardsService.removeAwardFromEmployee(
      employeeId,
      awardId,
    );
  }
}
